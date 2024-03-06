# Relatório **Crashlytics**

Abaixo, você verá o relatório de fevereiro de 2024 do Crashlytics, nossa ferramenta essencial para monitorar a estabilidade de aplicativos. Neste documentos vamos observar 2 dados, 
**_Usuários que não tiveram falhas_** e **_Sessões sem falhas_**. São dados que trazem a mesma informação mas de pontos de vista diferente. 
## Introdução ao KPI
No contexto do nosso relatório mensal sobre o Crashlytics, é essencial entender o que é um KPI (Indicador-Chave de Desempenho) e como ele se aplica à estabilidade dos nossos aplicativos. Um KPI é uma métrica fundamental que usamos para medir o desempenho e o sucesso de um aspecto específico do nosso trabalho. No caso do Crashlytics, nosso KPI está relacionado à estabilidade do aplicativo, o que significa que estamos medindo o quão bem nossos aplicativos estão funcionando em termos de ausência de falhas e erros.

_Definição do KPI no Contexto do Crashlytics:_ Mais especificamente, o KPI de estabilidade no contexto do Crashlytics refere-se à porcentagem de sessões de uso do aplicativo em que não ocorreram falhas ou erros significativos detectados pela ferramenta Crashlytics. Isso nos ajuda a entender a frequência com que nossos aplicativos funcionam sem problemas para os usuários.
 
_Exemplo Prático:_ Para ilustrar, vamos usar um exemplo hipotético: Suponhamos que, durante o mês de agosto, tivemos um total de 1000 sessões de uso do nosso aplicativo iOS. O Crashlytics registrou 3 falhas significativas que afetaram negativamente a experiência do usuário. Nesse caso, nosso KPI de estabilidade seria de 99,7%, indicando que 99,7% das sessões do aplicativo ocorreram sem problemas.
 
_Importância do KPI:_ Por que estamos medindo o KPI de estabilidade? É uma métrica crucial porque nos ajuda a avaliar a qualidade do nosso aplicativo e a identificar áreas que precisam de melhoria. Quanto maior o KPI, melhor a experiência do usuário e maior a satisfação. Além disso, monitorar esse KPI ao longo do tempo nos permite acompanhar nosso progresso na manutenção de um aplicativo estável e confiável.
 
_Relevância para os Objetivos da Equipe:_ Este KPI de estabilidade está diretamente alinhado com o objetivo mais amplo da nossa equipe, que é fornecer uma experiência de usuário excepcional. Quando nosso aplicativo funciona bem, os usuários estão satisfeitos, o que, por sua vez, contribui para o sucesso do nosso projeto.
 
No restante deste relatório, exploraremos os detalhes do nosso KPI de estabilidade, analisando dados específicos do Crashlytics.

## Android
![[Android.png]]
Temos dados do mês de fevereiro completo, nos quais podemos observar que ocorreram aproximadamente 12 mil falhas. O dia com o maior número de falhas foi o dia 21, com um total de 760 incidentes registrados.

Apesar dos números altos de falhas a porcentagem de sessões que não encontraram falhas durante todo o intervalo selecionado foi bem alta: 
> As sessões sem falhas são calculadas apenas para builds que usam uma versão do SDK do Crashlytics que oferece suporte a sessões (4.6.x)

Ela usa a fórmula:  
`1 - ( crashed_sessões / all_sessões )`

Para o nosso app, é essa:  
`1 - ( 490 / 77034 ) = 99,36%`

Terminamos o mês de **fevereiro** com o **KPI** em **99,36%** de todas as **sessões Android sem falhas** e com o **KPI** de **usuários que não tiveram falhas** em **98,56%**
## IOS
![[IOS.png]]
No lado IOS, podemos observar que ocorreram aproximadamente 996 falhas. O dia com o maior número de falhas foi o dia 29, com um total de 55 incidentes registrados.

Temos um número menor de falhas a em relação ao Android, mas isso se da pelo fato de termos menos usuários ativos. Porem, mantemos a porcentagem de sessões que não encontraram falhas durante todo o intervalo selecionado foi bem alta: 
> As sessões sem falhas são calculadas apenas para builds que usam uma versão do SDK do Crashlytics que oferece suporte a sessões (4.6.x)

Ela usa a fórmula:  
`1 - ( crashed_sessões / all_sessões )`

Para o nosso app, é essa:  
`1 - ( 995 / 276100 ) = 99,64%`

Terminamos o mês de **fevereiro** com o **KPI** em **99,64%** de todas as **sessões IOS sem falhas** e com o KPI de **usuários que não tiveram falhas** em **98,1%**



## Próximas Açōes:

Como próximos objetivos, precisamos melhorar o processo voltado para a finalização dos crashs ao serem reportados na plataforma. Vale a pena lembrar que, esses crashs em sua maioria, são **débitos técnicos** e fica difícil **conciliar** a resolução deles com as **tarefas no dia a dia**. Sugiro a **criação** de **issues** em nosso repositório do github, e, que essas ações sejam incluídas como tasks dentro da nossa sprint.
## Encerramento

O dado de **Sessões sem falhas** é algo novo é só esta disponível nas versões 4.6.x ou superiores, pois precisa de um SDK mais novo. Acredito que é um dado novo é super relevante para a observação das nossas métricas e vai ajudar no entendimento da qualidade do nosso app nos proxímos meses