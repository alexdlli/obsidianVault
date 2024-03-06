# Relatório **Crashlytics**

Abaixo, você verá o relatório de agosto de 2023 do Crashlytics, nossa ferramenta essencial para monitorar a estabilidade de aplicativos. Neste documento, destacaremos as informações da nova versão do aplicativo em React Native (4.x.x), fortalecendo nosso compromisso com a qualidade e a satisfação do usuário.

## Introdução ao KPI

No contexto do nosso relatório mensal sobre o Crashlytics, é essencial entender o que é um KPI (Indicador-Chave de Desempenho) e como ele se aplica à estabilidade dos nossos aplicativos. Um KPI é uma métrica fundamental que usamos para medir o desempenho e o sucesso de um aspecto específico do nosso trabalho. No caso do Crashlytics, nosso KPI está relacionado à estabilidade do aplicativo, o que significa que estamos medindo o quão bem nossos aplicativos estão funcionando em termos de ausência de falhas e erros.

_Definição do KPI no Contexto do Crashlytics:_ Mais especificamente, o KPI de estabilidade no contexto do Crashlytics refere-se à porcentagem de sessões de uso do aplicativo em que não ocorreram falhas ou erros significativos detectados pela ferramenta Crashlytics. Isso nos ajuda a entender a frequência com que nossos aplicativos funcionam sem problemas para os usuários.

_Exemplo Prático:_ Para ilustrar, vamos usar um exemplo hipotético: Suponhamos que, durante o mês de agosto, tivemos um total de 1000 sessões de uso do nosso aplicativo iOS. O Crashlytics registrou 3 falhas significativas que afetaram negativamente a experiência do usuário. Nesse caso, nosso KPI de estabilidade seria de 99,7%, indicando que 99,7% das sessões do aplicativo ocorreram sem problemas.

_Importância do KPI:_ Por que estamos medindo o KPI de estabilidade? É uma métrica crucial porque nos ajuda a avaliar a qualidade do nosso aplicativo e a identificar áreas que precisam de melhoria. Quanto maior o KPI, melhor a experiência do usuário e maior a satisfação. Além disso, monitorar esse KPI ao longo do tempo nos permite acompanhar nosso progresso na manutenção de um aplicativo estável e confiável.

_Relevância para os Objetivos da Equipe:_ Este KPI de estabilidade está diretamente alinhado com o objetivo mais amplo da nossa equipe, que é fornecer uma experiência de usuário excepcional. Quando nosso aplicativo funciona bem, os usuários estão satisfeitos, o que, por sua vez, contribui para o sucesso do nosso projeto.

No restante deste relatório, exploraremos os detalhes do nosso KPI de estabilidade, analisando dados específicos do Crashlytics.

## IOS:
![[Crashlytics Report Aug 2023 IOS.png]]
Temos dados a partir do dia 18, nos quais podemos observar que ocorreram aproximadamente 8 falhas. O dia com o maior número de falhas foi o dia 23, com um total de 14 incidentes registrados.

Nosso índice de falhas permanece baixo, com uma média de apenas 0,67% das sessões apresentando problemas.

**Terminamos o mês de agosto com o KPI em 99,33% de todas as sessões iOS sem falhas.**

## Android:
![[Crashlytics Report Aug 2023 Android.png]]

No lado Android, conseguimos disponibilizar o aplicativo um pouco mais cedo, a partir do dia 10. Durante esse período, observamos um total de aproximadamente 136 falhas. Notavelmente, o dia com o maior número de falhas foi o dia 22, com um registro alarmante de 1.115 incidentes.

Nosso índice de falhas está tão baixo quanto no iOS, apresentando uma média de 1% das sessões com problemas no Android.

**Terminamos o mês de agosto com o KPI em 98,32% de todas as sessões Android sem falhas.**

## Ações tomadas:

Durante este mês, mantivemos uma vigilância cuidadosa sobre os alertas, com foco especial na plataforma Android. Conseguimos implementar rapidamente quatro hotfixes para abordar os principais problemas:

## Próximas Açōes:

Como próximos objetivos, temos um desafio bastante interessante: precisamos conseguir mapear alguns incidentes que não estão sendo rastreados de forma legível no aplicativo Android. Alguns exemplos estão listados abaixo:

Precisamos tratá-los como exceções para poder enviar mais dados e resolver esses crashes que temos em nosso aplicativo.

## Encerramento:

Ao concluir este relatório, reafirmamos nosso compromisso em manter a estabilidade dos nossos aplicativos. Agosto trouxe desafios, mas demonstramos agilidade na resolução de problemas.

O Crashlytics desempenhou um papel fundamental, fornecendo informações sobre onde agir. Mantivemos nosso foco na qualidade, aprendendo com nossas experiências para fortalecer nossas próximas entregas.