FROM alpine:latest

RUN apk add --no-cache \
	vim npm

RUN corepack enable

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh

ENTRYPOINT /entrypoint.sh
