import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(201, 'Testes não verificam completamente as saídas de um sistema.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(202, 'Testes não garantem qualidade.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(203, 'Testes são essenciais?', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(204, 'Segundo Dijkstra, os testes mostram a ausência de bugs, não a presença deles.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(205, 'Testadores devem ser otimistas em relação aos testes que eles realizam no software.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(206, 'O Profissional testador de software não tem participação no Teste de Unidade.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(207, 'Teste de Unidade é feito pelo programador.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(208, 'Teste de Unidade é feito num baixo nível', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(209, 'Tudo o que os testes fazem, depois de todos os esforços necessários, é permitir que consideremos um programa como suficientemente correto para os nossos propósitos.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(210, 'Testes de unidade não são automatizados, já que são feitos pelo próprio programador durante a implementaçãodas unidades.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(211, 'Os testes de integração são feitos em todos os métodos de uma classe, para avaliar a integração esses métodos entre si.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(212, 'O Profissional testador de software tem participação no Teste de integração.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(213, 'Teste de integração é realizado antes do sistema estar concluído.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(214, 'Teste de integração é também automatizado.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(215, 'Teste de sistema é feito pelo programador logo após os testes de unidade e integração.', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(216, 'Teste de sistema é planejado pela equipe de testes.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(217, 'Testes de sistema é baseado nos requisitos e os cenários de testes são criados a partir dos requisitos.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(218, 'Os requisitos não funcionais são explorados nos testes de sistemas?', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(219, 'A Validação de dados informados em campos da tela são feitos nos testes de sistemas.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(220, 'Teste de aceitação é testado pela UI, ou seja, a nível de sistema e, de fato, não é o tester quem faz esses testes.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(221, 'Teste Alfa é feito sem planejamento, sem seguir cenários de testes, simplesmente usam e fornecem feedback.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(222, 'Testes Alfas são acompanhados geralmente pela equipe de testes.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(223, 'Testes Beta são não planejados e feitos por um grande número de pessoas desconhecidas e com a abrangência do teste de sistema.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(224, 'Testes de regressão não ajudam a evitar side effect (efeito colateral).', [
        RespostaModel.certa('Falso'),
        RespostaModel.errada('Verdadeiro'),
    ]),
    new QuestaoModel(225, 'Teste de mutação avalia...', [
        RespostaModel.certa('A qualidade dos casos de testes'),
        RespostaModel.errada('Os cenários de teste'),
        RespostaModel.errada('Os testes funcionais'),
        RespostaModel.errada('Os testes de sistema'),
    ]),
    new QuestaoModel(226, 'Quais são os níveis/fases de teste de software, em ordem?', [
        RespostaModel.errada('Integração, Unidade, Sistema, Aceitação, Alfa, Beta.'),
        RespostaModel.errada('Unidade, Sistema, Aceitação, Integração, Alfa, Beta.'),
        RespostaModel.errada('Integração, Sistema, Unidade, Aceitação, Beta, Alfa.'),
        RespostaModel.certa('Unidade, Integração, Sistema, Aceitação, Alfa, Beta.'),
    ]),
    new QuestaoModel(227, 'Quais são as etapas para a realização de teste de software?', [
        RespostaModel.errada('Planejamento, Cenário, Execução e Casos de Teste.'),
        RespostaModel.errada('Planejamento, Execução e Análise.'),
        RespostaModel.errada('Planejamento, Cenário, Execução e Análise.'),
        RespostaModel.certa('Planejamento, Cenário, Casos de Teste, Execução e Análise.'),
    ]),
    new QuestaoModel(228, 'Desenvolvedores não são as pessoas ideais para testar um sistema que ele mesmo desenvolveu, por que ele tem uma visão otimista do software.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(229, 'As chances do profissional testador encontrar problemas no software são maiores do que do programador.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
    new QuestaoModel(230, 'E2E é um método de teste utilizado para testar um fluxo da aplicação desde o começo até o fim.', [
        RespostaModel.errada('Falso'),
        RespostaModel.certa('Verdadeiro'),
    ]),
]

export default questoes