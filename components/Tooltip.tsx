import { isTouchDevice } from 'helpers/isTouchDevice'
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Card, Flex, SxStyleProp } from 'theme-ui'

export function useTooltip() {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const close = useCallback(() => {
    setTooltipOpen(false)
  }, [])

  useEffect(() => {
    if (tooltipOpen) {
      // capture parameter is added to overcome event phases race condition while rendering portal
      // (opening modal causes tooltip to stop working) - https://github.com/facebook/react/issues/20074#issuecomment-714158332
      document.addEventListener('click', close, { capture: true })

      return () => document.removeEventListener('click', close)
    }
    return () => null
  }, [tooltipOpen])

  return { tooltipOpen, setTooltipOpen }
}

export function Tooltip({ children, sx }: { children: ReactNode; sx?: SxStyleProp }) {
  return (
    <Card
      sx={{
        variant: 'cards.tooltip',
        maxWidth: '400px',
        ...sx,
      }}
    >
      {children}
    </Card>
  )
}

interface StatefulTooltipProps {
  tooltip: ReactNode
  children: ReactNode
  tooltipSx?: SxStyleProp
  containerSx?: SxStyleProp
}

export function StatefulTooltip({
  tooltip,
  tooltipSx,
  containerSx,
  children,
}: StatefulTooltipProps) {
  const { tooltipOpen, setTooltipOpen } = useTooltip()

  const handleMouseEnter = useMemo(
    () => (!isTouchDevice ? () => setTooltipOpen(true) : undefined),
    [isTouchDevice],
  )

  const handleMouseLeave = useMemo(
    () => (!isTouchDevice ? () => setTooltipOpen(false) : undefined),
    [isTouchDevice],
  )

  const handleClick = useCallback(() => tooltip && setTooltipOpen(true), [])

  return (
    <Flex
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      sx={containerSx}
    >
      {children}
      {tooltipOpen && <Tooltip sx={tooltipSx}>{tooltip}</Tooltip>}
    </Flex>
  )
}

interface Props {
  text: React.ReactNode
  children: React.ReactNode
}

export function StatefulTooltipWithPortal({ text, children }: Props) {
  // Position of the bottom edge of the anchor element.
  // Doubles as isVisible state: null means hidden
  const [position, setPosition] = useState<{
    x: number
    y: number
  } | null>(null)

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    // Place the tooltip near the anchor's bottom edge on the screen
    const bounds = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    })
  }

  const handleMouseOut = () => setPosition(null)

  const anchorProps = {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  }

  const anchor = React.isValidElement(children) ? (
    React.cloneElement(children, anchorProps)
  ) : (
    <span {...anchorProps}>{children}</span>
  )

  return (
    <>
      {anchor}
      {position &&
        createPortal(
          <Tooltip
            sx={{
              top: position.y,
              left: position.x,
              position: 'absolute',
              zIndex: 10,
            }}
          >
            <div>{text}</div>
          </Tooltip>,
          document.body,
        )}
    </>
  )
}
