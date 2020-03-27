# Semana-OmniStack-11.0

É necessário antes de fazer quanquer coisa instalar o node e o npm, neste projeto foram utilizados respectivamente as verções v12.16.1 e 6.13.4.
Execute "installLinux.sh" ou "installWindows.bat" para instalar as dependencias.
Execute dentro da pasta backend "npm start" para iniciar o backend.
Execute dentro da pasta frontend "npm start" para iniciar o frontend.

comandos executados até agora:

## Backend
	npm init -y
	npm install express
	// criar (manualmente) arquivo index.js
	// reiniciar backend automaticamente (-D significa dependencia de desenvolvimento)
		npm install nodemon -D
	// ininiciar
		node index.js //<- sem o nodemon / com o nodemon ->// npm start
	// acesso do frontend
		npm install cors
	//fazer validações
		npm install celebrate


## BD Query Builder instalar
	npm install knex
		//selecionar um dos BD
		npm install pg //PostgreSQL
		npm install sqlite3 //SQLite
	//Criar arquivo de conexão
		npx knex init
	//Criar migrations
		npx knex migrate:make /*nome*/


## Frontend
	npx create-react-app frontend
	//icone
	npm install react-icons
	// configuração de rotas
		// installar
			npm install react-router-dom
	// ininiciar
	npm start


## cliente http
	//instalar
		npm install axios

		



## Criar app mobile
	//instalar expo
		npm install -g expo-cli
			//ele será instalado globalmente
	//criar projeto mobile
		expo init /*nome*/
	//iniciar
		expo start / ou / npm start
	//configuração de rotas
		//instalar
			npm install @react-navigation/native
			//instalar dependencias do expo
				expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
				//instalar tipo de navegação
					npm install @react-navigation/stack //navegação por botões
					//instalar constantes dos dispositivos
						expo install expo-constants
	//instalar ferramenta
		//escrever email
			expo install expo-mail-composer
		//ferramenta
			npm install intl



## testes
	npm install jest
	//cross env
		npm install cross-env
	//testes de comunicação
		npm install supertest
