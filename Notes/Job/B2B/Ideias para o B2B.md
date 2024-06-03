
Base de dados separada para assinatura e ou cliente B2B ( Cloud SQL, Postgress )

Base de dados para os assets
	Permissão com a Del

Atualizar subscriptions
	- Ele vai criar dados dentro da base de assinatura
	- Vai sincronizar dados

App Subscription Api em Node. vai servir para gerenciar a assinatura B2B do app na area logada
- Crud de Cliente
- Crud de Contrato
- Crud de Contato
- Crud de license?
- Crud de Permissão

Base de dados do Analytics
	- Garantir espelho entre app e base de dados

Api de Analytics
	- Precisa de que dados
	- Não vai ser modular para aceitar todos os tipos de eventos
	- Salvar por dia ou por mes
	- Mecanismo de falha de processo
		- Streams
	- Um lugar pra cuidar de erros ( Sentry, Crashlytics )
	- Validar privacidade dos dados e sobre solicitação do user / empresa

Api Do App
	- Assinatura
	- Analytics

Consumo no app
	- Validar assinatura
		- Vamos fazer a validação a cada 7 dias no app
			- React Query com uma query de 30 dias ou 7 dias ( remote config )
		- Se for um dominio gmail.com, outlook.com, hotmail.com,  a gente não faz a requisição pra api
	- Sincronizar dados com a api de Analytics
		- Faz request pra Api
		- Parar o processo
			- Streams
	
	- Moedas?
	- Avatares?
		- Trocar o default