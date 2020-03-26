# Semana-OmniStack-11.0

É necessário antes de fazer quanquer coisa instalar o node e o npm, neste projeto foram utilizados respectivamente as verções v12.16.1 e 6.13.4.
Execute "installLinux.sh" ou "installWindows.bat" para instalar todas as dependencias.
Execute dentro da pasta backend "npm start" para iniciar o backend.
Execute dentro da pasta frontend "npm start" para iniciar o frontend.

comandos executados até agora:

// backend
	npm init -y
	npm install express
	// criar (manualmente) arquivo index.js
	// reiniciar backend automaticamente (-D significa dependencia de desenvolvimento)
		npm install nodemon -D
	// ininiciar
		node index.js //<- sem o nodemon / com o nodemon ->// npm start
	// acesso do frontend
		npm install cors


//BD Query Builder instalar
	npm install knex
		//selecionar um dos BD
		npm install pg //PostgreSQL
		npm install sqlite3 //SQLite
	//Criar arquivo de conexão
		npx knex init
	//Criar migrations
		npx knex migrate:make /*nome*/


// frontend
	npx create-react-app frontend
	//icone
	npm install react-icons
	// configuração de rotas
		// installar
			npm install react-router-dom
	// ininiciar
	npm start


// cliente http
	//instalar
		npm install axios

		



// Criar app mobile
	//instalar expo
		npm install -g expo-cli
			//ele será instalado globalmente
	//iniciar projeto mobile
		expo init /*nome*/