start:
	make stop
	docker compose --file docker/docker-compose.yaml --env-file docker/.env up --build --detach

stop:
	docker compose --file docker/docker-compose.yaml --env-file docker/.env down

format:
	cd app; prettier -w .

lint:
	cd app; eslint src
