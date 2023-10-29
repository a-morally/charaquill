#!/bin/sh

cd /var/www/app
yarn run dev --port $APP_PORT_INT --host 0.0.0.0
