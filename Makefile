prisma-init : 
	npx prisma init --datasource-provider sqlite

prisma-migrate : 
	npx prisma migrate dev --name init

.PHONY: prisma-init prisma-migrate