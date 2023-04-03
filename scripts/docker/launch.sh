#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "Starting dependencies..."
docker-compose "$@" down
docker rm -f postgres-oasis-borrow || true
docker rm -f multiply-proxy-actions || true
docker rm -f gsucoin || true

cd "$(dirname "../../../")"
docker build -f Dockerfile -t gsucoin . $(for i in `cat .env`; do out+="--build-arg $i " ; done; echo $out;out="")

docker-compose -f ./scripts/docker/docker-compose.yaml -p gsucoin-app --env-file ../../.env up -d