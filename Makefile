start: stop
	docker compose --file docker/docker-compose.yaml --env-file docker/.env up --build --detach

stop:
	docker compose --file docker/docker-compose.yaml --env-file docker/.env down
