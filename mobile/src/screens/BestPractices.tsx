import { Header } from '@components/Header'
import { SocialMedias } from '@components/SocialMedias'
import { View, ScrollView, Image } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import SalaryImg from '@assets/salary.png'

export function BestPractices() {
  const { colors } = useTheme()

  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={{
          padding: 50,
          paddingBottom: 200,
          gap: 15,
        }}
      >
        <Text variant="displayLarge" style={{ color: colors.primary }}>
          Boas Práticas
        </Text>
        <Text variant="headlineSmall">
          ENQUADRAMENTO PREVIDENCIÁRIO DO AGRICULTOR FAMILIAR
        </Text>
        <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
          O produtor rural AGRICULTOR FAMILIAR é um segurado especial. Pode
          contratar empregado rural até o limite de 120 dias por ano sem perder
          a sua condição de produtor.
        </Text>
        <Text variant="titleLarge">1 Trabalhador: 120 dias</Text>
        <Text variant="titleLarge">2 Trabalhadores: 60 dias</Text>
        <Text variant="titleLarge">3 Trabalhadores: 40 dias</Text>
        <Text variant="titleLarge">4 Trabalhadores : 30 dias por ano</Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          FORMAS DE CONTRATAÇÃO DE MÃO DE OBRA
        </Text>
        <Text variant="titleLarge">
          DIRETA –{' '}
          <Text variant="bodyLarge">
            quando o proprietário contrata o trabalhador
          </Text>
        </Text>
        <Text variant="titleLarge">
          INDIRETA -{' '}
          <Text variant="bodyLarge">
            quando o proprietário contrata uma empresa que vai contratar o
            trabalhador (terceirização do serviço)
          </Text>
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">CONTRATAÇÃO DIRETA</Text>
        <Text variant="bodyLarge">- autônomo</Text>
        <Text variant="bodyLarge">- autônomo exclusivo</Text>
        <Text variant="bodyLarge">- celetista</Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">AUTÔNOMO</Text>
        <Text variant="bodyLarge">
          Contrato sem subordinação. Geralmente é um contrato por meta
          previamente definida – Ex.: um valor fixo pela colheita de tantos
          quilos por dia. Neste tipo de contrato é importante que o trabalhador
          autônomo tenha registro no seu município ou no INSS e recolha o INSS
          mensal – 20% do valor do salário mínimo. Pode ser MEI.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">AUTÔNOMO EXCLUSIVO</Text>
        <Text variant="bodyLarge">
          Contrato também sem subordinação. Geralmente é um contrato por meta
          previamente definida de trabalho para um só empregador. É necessário o
          recolhimento do INSS. Pode ser MEI.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">MEI</Text>
        <Text variant="bodyLarge">
          MEI - Outra forma também aceita legalmente é a contratação de um
          Microempreendedor Individual (MEI) desde que entre suas principais
          atividade esteja os CNAEs 0161-0/02 - Prestador(a) de serviços de
          poda, ou 0161-0/03 - Prestador(a) de serviços de colheita. Ambos em
          contrato de empreitada e independente. Podem trabalhar para vários
          tomadores de serviços. OBSERVAR: Será irregular a contratação de
          Autônomo ou MEI para a prestação de serviços com pessoalidade,
          subordinação e habitualidade. CNAE significa Classificação Nacional
          das Atividades Econômicas
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          CONTRATO POR PRAZO DETERMINADO X INDETERMINADO
        </Text>
        <Text variant="titleLarge">
          PRAZO INDETERMINADO{' '}
          <Text variant="bodyLarge">- Contrato convencional – CLT</Text>
        </Text>
        <Text variant="titleLarge">PRAZO DETERMINADO (CLT) </Text>
        <Text variant="bodyLarge">
          A) Contrato de trabalho por prazo determinado;
        </Text>
        <Text variant="bodyLarge">B) Contrato de Safra</Text>
        <Text variant="bodyLarge">C) Contrato de Trabalho Intermitente</Text>
        <Text variant="bodyLarge">
          D) Contrato de Trabalho por Pequeno Prazo
        </Text>
        <Text variant="titleLarge">TERCEIRIZAÇÃO</Text>
        <Text variant="bodyLarge">
          Ocorre quando o proprietário (produtor) transfere para uma empresa a
          responsabilidade pela realização de algum serviço. A empresa contrata
          os empregados e assina a carteira de todos eles pela CLT. Nesse caso,
          o vínculo de emprego de todos os trabalhadores é sempre com a empresa.
        </Text>
        <Text variant="titleLarge">CONTRATO POR SAFRA</Text>
        <Text variant="bodyLarge">
          É um contrato de prestação de serviço, regulado pela Lei 5.889/73, por
          prazo determinado e exclusivo da atividade rural, pelo qual o produtor
          contrata um trabalhador para desenvolver alguma atividade específica
          na sua propriedade. Ex.: contratação para o preparo do solo, para o
          plantio, poda ou para a colheita. É um contrato muito comum quando o
          produtor está precisando de mão de obra extra.
        </Text>
        <Text variant="titleLarge">CONTRATO INTERMITENTE</Text>
        <Text variant="bodyLarge">
          O contrato de trabalho intermitente permite uma prestação de serviço
          não contínua, ou seja, que não acontece todos os dias, alternando-se
          períodos de atividade e inatividade. É um contrato que respeita os
          mesmos direitos dos demais contratos, com vínculo de emprego,
          subordinação e direitos trabalhistas
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">ATIVIDADE FIM X ATIVIDADE MEIO</Text>
        <Text variant="bodyLarge">
          A atividade fim é a principal atividade do produtor. Atualmente a
          terceirização pode envolver a atividade fim da propriedade, como a
          colheita, por exemplo. Antigamente somente poderia ser contratado para
          atividade meio (motorista, tratorista, carregador de caixa).
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">SUBORDINAÇÃO X AUTONOMIA</Text>
        <Text variant="bodyLarge">
          Subordinação se caracteriza pelo trabalho com vínculo de emprego, ou
          seja, subordinado de alguém (patrão)..
        </Text>
        <Text variant="bodyLarge">
          Autonomia tem como característica o trabalho sem subordinação a
          ninguém, ou seja, trabalha com liberdade de horários, dias, etc.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">VANTAGENS DA SUBORDINAÇÃO</Text>
        <Text variant="bodyLarge">
          Trabalho com subordinação e com vínculo de emprego oferece a vantagem
          de poder atuar em todas as áreas da propriedade (trator, lavoura,
          gado, etc.).
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">VANTAGENS DA AUTONOMIA</Text>
        <Text variant="bodyLarge">
          Trabalho sem subordinação e sem vínculo de emprego. Pode ser
          direcionado para uma atividade específica, a um custo menor (Ex.:
          contador).
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          TRABALHO X EMPREGO AUTONOMIA X SUBORDINAÇÃO
        </Text>
        <Text variant="bodyLarge">
          O TRABALHO é toda e qualquer atividade específica e remunerada que
          pode ser realizada por autônomos não subordinados ao tomador do
          serviço por prazo determinado.
        </Text>
        <Text variant="bodyLarge">
          EMPREGO tem vínculo empregatício e exige CTPS assinada, estando o
          trabalhador subordinado ao empregador, cumprindo horários e regras
          específicas.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">Contrato efetivo</Text>
        <Text variant="bodyLarge">
          Nova Carteira de Trabalho, na modalidade eletrônica (que substituiu a
          antiga carteira de trabalho).
        </Text>
        <Text variant="headlineSmall">Trabalhadores em Seguro Desemprego</Text>
        <Text variant="bodyLarge">
          O seguro-desemprego é um valor pago ao trabalhador após a demissão sem
          justa causa. Geralmente é um salário-mínimo pelo período máximo de
          seis (06) meses. Caso o trabalhador retorne a ser empregado nesse
          período, deixa de ser desempregado e o pagamento do auxílio é
          interrompido.
        </Text>
        <Text variant="headlineSmall">Trabalhadores em férias</Text>
        <Text variant="bodyLarge">
          Férias é direito de todo o trabalhador contratado pela CLT ao
          completar um período aquisitivo de 12 meses. A legislação permite
          trabalhar em outro emprego nesse período, desde que respeitadas as
          formas de contratação previstas pela legislação.
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE INDÍGENAS</Text>
        <Text variant="bodyLarge">
          Indígenas podem ser contratados para qualquer trabalho. O Estatuto do
          Índio (Lei nº 6.001/1973) proíbe tratamento discriminatório entre
          indígenas e demais trabalhadores. Mas atenção! O Estatuto classifica
          os indígenas conforme o grau de inserção na sociedade, podendo ser
          definido como isolados, em vias de integração, integrados ou
          incorporados. O contrato de trabalho com índios isolados é nulo e para
          aqueles em vias de integração depende de aprovação da Fundação
          Nacional do Índio (FUNAI).
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE MENORES</Text>
        <Text variant="bodyLarge">
          De acordo com o Estatuto da Criança e do Adolescente (ECA) menores são
          aquelas pessoas que têm até 18 anos de idade. Estes não podem
          trabalhar em condições de risco, perigosas ou insalubres, sendo
          proibidos, portanto, o trabalho em atividade rural.
        </Text>
        <Text variant="headlineSmall">
          CONTRATAÇÃO DE ESTRANGEIROS/IMIGRANTES
        </Text>
        <Text variant="bodyLarge">
          É permitida sem distinção em relação ao trabalhador brasileiro, mas é
          necessário que esteja regularizado no país com CPF e visto de entrada.
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE MIGRANTES</Text>
        <Text variant="bodyLarge">
          Da mesma forma que os estrangeiros, podem ser contratados desde que
          estejam em situação regular com CPF.
        </Text>
        <Text variant="headlineSmall">
          CONTRATAÇÃO DE COOPERATIVA DE MÃO DE OBRA
        </Text>
        <Text variant="bodyLarge">
          É permitida a contratação de trabalhadores que façam parte de
          cooperativas, devidamente associados e ativos nas assembleias e nas
          deliberações e de acordo com os princípios do cooperativismo. No
          entanto, essa contratação equivale à contratação de profissionais
          autônomos. É recomendável ter cuidado nesse tipo de contratação, pois
          não pode haver relação de subordinação ao produtor
          (proprietário/empregador).
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE MULHERES</Text>
        <Text variant="bodyLarge">
          É permitida no mesmo modelo do contrato pela CLT, mas as mulheres
          devem ficar em alojamento separado dos homens.
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE PARENTES</Text>
        <Text variant="bodyLarge">
          Também é permitida no modelo do contrato pela CLT. O parente tem os
          mesmos direitos que qualquer outro trabalhador.
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE APOSENTADOS</Text>
        <Text variant="bodyLarge">
          É permitida a contratação pela CLT, salvo o aposentado por invalidez.
        </Text>
        <Text variant="headlineSmall">CONTRATAÇÃO DE PARCERIA</Text>
        <Text variant="bodyLarge">
          O contrato de parceria constitui um acordo entre duas ou mais pessoas,
          sejam físicas ou jurídicas para trabalharem em conjunto em uma
          atividade comercial ou em um negócio. Portanto não é um contrato de
          trabalho e nem tem subordinação entre as partes. É um contrato muito
          próximo do contrato de sócio(empresarial) firmado para alguma
          atividade comercial. Contrato de parceria não gera uma empresa.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE SOCIEDADE</Text>
        <Text variant="bodyLarge">
          O contrato de sociedade se constitui quando duas ou mais pessoas,
          físicas ou jurídicas se unem “em cotas” para atuar em alguma a
          atividade comercial ou negócio. Neste caso o contrato precisa dispor
          qual a cota de cada parte e também não é um contrato de trabalho e nem
          tem subordinação entre as partes. O contrato de sociedade gera uma
          empresa comercial, conforme a lei.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE ARRENDAMENTO</Text>
        <Text variant="bodyLarge">
          O contrato de arrendamento é quando uma das partes aluga de outro uma
          determinada porção de terra para plantar ou para cultivar algum
          produto e paga esse aluguel com uma porcentagem do lucro que obtiver
          vendendo os produtos. Também não é uma contrato de trabalho e não gera
          subordinação entre eles.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE PERMUTA</Text>
        <Text variant="bodyLarge">
          O contrato de permuta (troca) é permito pela lei, desde que sejam
          sobre bens ou serviços diferentes e que não sejam sobre direitos
          trabalhistas, pois o direito trabalhista é irrenunciável e não pode
          ser trocado por nada, nem por ninguém. Assim uma pessoa pode permutar
          um apartamento por uma casa de outro. Um dentista pode permutar um
          serviço com outro serviço de um advogado, por exemplo.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">Manifestação Fiscal do Trabalho</Text>
        <Text variant="bodyLarge">
          “Troca de dias é considerada válida desde que seja realizada entre
          produtores rurais e envolva a troca de ‘TRABALHO X TRABALHO’. Não é
          aceitável a alegação de que se trata de “troca de dias” quando envolve
          pagamentos em dinheiro ou pessoas que não sejam produtores rurais ou
          que sejam apresentados talões de produtor de locais distantes. Enfim,
          troca de trabalho por trabalho entre produtores rurais vizinhos ou das
          proximidades. Ambos devem ter talão de produtor.
        </Text>
        <Text variant="headlineSmall">TROCA DE DIAS ENTRE PRODUTORES</Text>
        <Text variant="bodyLarge">
          Este contrato não existe na legislação brasileira, pois havendo troca
          de trabalho entre os produtores, este deverá ser regido pela lei
          respectiva, no caso a CLT (celetista ou autônomo). Portanto se algum
          produtor solicitar um trabalho para outro produtor, o correto é
          definir os horários, os salários e assinar a carteira.
        </Text>
        <Text variant="headlineSmall">CONSÓRCIO DE EMPREGADORES RURAIS</Text>
        <Text variant="bodyLarge">
          É uma forma de organização para a contratação de trabalhadores. A lei
          permite que um grupo de produtores rurais pessoas físicas se reúnam e
          concedam a um deles os poderes para contratar, gerir e demitir os
          trabalhadores, que poderão prestar serviços a qualquer um dos
          integrantes do consórcio.
        </Text>
        <Text variant="bodyLarge">
          Previsto pela Lei nº 8.212/1991, artigo 25-A e Decreto nº 3.048/1999,
          art. 200-A.
        </Text>
        <Text variant="bodyLarge">
          O consórcio deve ser formalizado por um documento denominado “Pacto de
          Solidariedade”, que deve ser levado a registro no Cartório de Títulos
          e Documentos antes da contratação dos trabalhadores. O pacto deverá
          conter a identificação de cada produtor, sua matrícula no INSS, seu
          endereço pessoal e o de sua propriedade rural, bem como o respectivo
          registro no Instituto Nacional de Colonização e Reforma Agrária
          (INCRA) ou informações relativas à parceria, arrendamento ou
          equivalente.
        </Text>
        <Text variant="bodyLarge">
          O consórcio deverá ser matriculado no INSS em nome do empregador que
          tenha recebido os poderes para contratar, gerir e demitir os
          trabalhadores.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">CELETISTA</Text>
        <Text variant="bodyLarge">
          Contrato de trabalho pelas normas da Consolidação das Leis do Trabalho
          (CLT). Contrato com subordinação.
        </Text>
        <Text variant="bodyLarge">• carteira de trabalho assinada (CTPS)</Text>
        <Text variant="bodyLarge">• recolhimento de INSS</Text>
        <Text variant="bodyLarge">• IR para valores acima de R$ 1.903,99</Text>
        <Text variant="bodyLarge">
          • jornada de 44 horas semanais com salário, férias, 13º salário,{' '}
        </Text>
        <Text variant="bodyLarge">
          • FGTS, horas-extras (máximo de 2 horas por dia)
        </Text>
        <Text variant="bodyLarge">
          • Aviso prévio, direito a seguro-desemprego – exceção ‘safrista’
        </Text>
        <Text variant="bodyLarge">
          Nesse tipo de contrato é necessário preencher o e-Social, ter laudo
          ambiental, medicina do trabalho e de segurança do trabalho.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          CONTRATO POR PRAZO DETERMINADO X INDETERMINADO
        </Text>
        <Text variant="titleLarge">
          Prazo determinado{' '}
          <Text variant="bodyLarge">– Contrato por safra – CLT</Text>
        </Text>
        <Text variant="titleLarge">
          Prazo indeterminado{' '}
          <Text variant="bodyLarge">- Contrato convencional – CLT</Text>
        </Text>
        <Text variant="headlineSmall">CONTRATO POR SAFRA</Text>
        <Text variant="bodyLarge">
          Contrato de trabalhadores pela CLT para atuar num período de safra, ou
          seja, o contrato termina numa data determinada pela safra – com
          subordinação e vínculo de emprego.
        </Text>
        <Text variant="headlineSmall">TERCEIRIZAÇÃO</Text>
        <Text variant="bodyLarge">
          Ocorre quando o proprietário (produtor) transfere para uma empresa a
          responsabilidade pela realização de algum serviço. A empresa contrata
          os empregados e assina a carteira de todos eles pela CLT. Nesse caso,
          o vínculo de emprego de todos os trabalhadores é sempre com a empresa.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">NORMA REGULAMENTADORA 31 (NR 31)</Text>
        <Text variant="bodyLarge">
          Norma regulamentadora da atividade rural que estabelece as regras de
          proteção ao trabalho, saúde do trabalhador, treinamento, segurança,
          etc.
        </Text>
        <Text variant="headlineSmall">EPIs</Text>
        <Text variant="bodyLarge">
          Equipamentos de Proteção Individual fundamentais para evitar acidentes
          de trabalho. Devem ser disponibilizados pelo contratante. Boné ou
          chapéu árabe – botas/sapatos – protetor solar FPS 50
        </Text>
        <Text variant="headlineSmall">Água Potável</Text>
        <Text variant="bodyLarge">
          É fundamental que a água seja própria para beber e para tomar banho,
          em temperatura que atenda as características climáticas da região.
        </Text>
        <Text variant="headlineSmall">Alimentação</Text>
        <Text variant="bodyLarge">
          Toda a alimentação, segundo a NR31, deve ser preparada em local limpo,
          bem acondicionada e servida em local adequado, mesmo quando a refeição
          for feita na lavoura.
        </Text>
        <Text variant="headlineSmall">Alojamento</Text>
        <Text variant="bodyLarge">
          Deve ser local seguro, limpo, com ventilação e com uma cama a cada 3
          m², com um banheiro para cada 10 pessoas.
        </Text>
        <Text variant="headlineSmall">Alojamento feminino</Text>
        <Text variant="bodyLarge">
          Deve obrigatoriamente ser separado do alojamento masculino e
          apresentar as mesmas características.
        </Text>
        <Text variant="headlineSmall">Banheiros</Text>
        <Text variant="bodyLarge">
          Devem estar em conformidade com a NR31 e atender no máximo 10 pessoas
          por unidade.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">Laudos Técnicos</Text>
        <Text variant="bodyLarge">
          PCMSO - Programa de Controle Médico de Saúde Ocupacional
        </Text>
        <Text variant="bodyLarge">
          LTCAT - Laudo Técnico das Condições do Ambiente de Trabalho
        </Text>
        <Text variant="bodyLarge">
          PGRTR - Programa de Gerenciamento de Riscos no Trabalho Rural
        </Text>
        <Text variant="bodyLarge">
          Serviços a serem contratados através de empresa especializada. Para os
          cálculos – contratar contador
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          DIREITOS DE QUEM TRABALHA POR CONTRATO DA CLT
        </Text>
        <Text variant="bodyLarge">
          Proporcional ao período ou aos dias trabalhados compreendem o
          pagamento de:
        </Text>
        <View>
          <Text variant="bodyLarge">• salário,</Text>
          <Text variant="bodyLarge">• férias (mais 1/3 sobre férias),</Text>
          <Text variant="bodyLarge">• 13º salário, FGTS,</Text>
          <Text variant="bodyLarge">• multa de 40% sobre o saldo do FGTS,</Text>
          <Text variant="bodyLarge">• aviso prévio,</Text>
          <Text variant="bodyLarge">• INSS,</Text>
          <Text variant="bodyLarge">• hora-extra,</Text>
          <Text variant="bodyLarge">• DSR (Descanso Semanal Remunerado), </Text>
          <Text variant="bodyLarge">
            • intervalo mínimo uma (01) hora para almoço,
          </Text>
          <Text variant="bodyLarge">• intervalo de 11 horas de descanso,</Text>
          <Text variant="bodyLarge">• adicional noturno de 20%,</Text>
          <Text variant="bodyLarge">• salário-família,</Text>
          <Text variant="bodyLarge">• insalubridade,</Text>
          <Text variant="bodyLarge">• periculosidade,</Text>
          <Text variant="bodyLarge">• vale-transporte,</Text>
          <Text variant="bodyLarge">• vale-alimentação</Text>
        </View>
        <Text variant="bodyLarge">Registro na CTPS.</Text>
        <Text variant="titleLarge">Justiça do trabalho</Text>
        <Text variant="bodyLarge">
          Órgão responsável por julgar demandas relacionadas ao trabalho
          celetista. As partes devem ser representadas por advogado.
        </Text>
        <Text variant="titleLarge">Ministério do Trabalho e Emprego</Text>
        <Text variant="bodyLarge">
          O Ministério do Trabalho e Emprego fiscaliza o trabalho em todo o país
          em qualquer empresa ou propriedade rural.
        </Text>
        <Text variant="titleLarge">Riscos</Text>
        <Text variant="bodyLarge">
          Denúncias feitas por qualquer pessoa, inclusive pelo trabalhador.
        </Text>
        <Text variant="titleLarge">Multas</Text>
        <Text variant="bodyLarge">
          Podem ser aplicadas usando como referência o tipo de infração, o
          número de trabalhadores, etc.
        </Text>
        <Text variant="headlineSmall">OUTROS CUIDADOS</Text>
        <Text variant="titleLarge">Assédio moral</Text>
        <Text variant="bodyLarge">
          Situação que pode ser gerada na relação entre empregador e
          trabalhador. Pode acontecer quando o trabalhador é ridicularizado pelo
          seu desempenho ou forma de caminhar ou falar, ou mesmo que pelo que
          está vestindo. Tudo o que diz respeito às características ou ao
          comportamento do trabalhador.
        </Text>
        <Text variant="titleLarge">Assédio sexual</Text>
        <Text variant="bodyLarge">
          Pode ser caracterizado por perguntas simples ou insinuações que possam
          dar margem a interpretações de conotação sexual na relação entre
          trabalhador e empregador.
        </Text>
        <Text variant="titleLarge">Não discriminar</Text>
        <Text variant="bodyLarge">
          Não pode haver tratamento diferenciado (inferiorizado) a uma pessoa ou
          grupo de pessoas, em razão da sua pertença a uma determinada raça,
          cor, sexo, nacionalidade, origem étnica, orientação sexual ou
          identidade de gênero.
        </Text>
        <Text variant="titleLarge">
          NOVA LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)
        </Text>
        <Text variant="bodyLarge">
          Essa lei proíbe que sejam divulgadas quaisquer informações sobre os
          trabalhadores e seus dados pessoais.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          ROTEIRO PARA CONTRATAR TRABALHADOR RURAL
        </Text>
        <Text variant="bodyLarge">1- Contratar assessoria de um contador</Text>
        <Text variant="bodyLarge">
          2- Encaminhar a documentação do produtor rural (CPF, endereço e conta
          gov.br) para o contador fazer o registro do mesmo no e-Social;
        </Text>
        <Text variant="bodyLarge">
          3- Contratar empresa para elaborar o LTCAT, PCMSO e o PGRTR, que
          estabelece as condições para a segurança do trabalho e medicina
          ocupacional da propriedade e suas instalações;
        </Text>
        <Text variant="bodyLarge">
          4- Selecionar o trabalhador – pode ser com ajuda do Sine. Solicitar a
          documentação do trabalhador (RG, CPF, CTPS);
        </Text>
        <Text variant="bodyLarge">
          5- Analisar toda a documentação, currículo e procedência professional
          e criminal do candidato;
        </Text>
        <Text variant="bodyLarge">
          6- Encaminhar para o exame admissional com o médico do trabalho;
        </Text>
        <Text variant="bodyLarge">
          7- Contratar o trabalhador – encaminhar documentação para o contador
          fazer o registro do trabalhador no E-social;
        </Text>
        <Text variant="bodyLarge">
          8- Contador elabora o contrato de trabalho;
        </Text>
        <Text variant="bodyLarge">
          9- Assinar o contrato de trabalho de cada trabalhador;
        </Text>
        <Text variant="bodyLarge">
          10- Quando o trabalhador se apresentar na propriedade, na data marcada
          para iniciar o serviço, fornecer os EPIs para os trabalhadores;
        </Text>
        <Text variant="bodyLarge">
          11- Apresentar as acomodações, local das refeições, sanitários e o
          local de trabalho;
        </Text>
        <Text variant="bodyLarge">
          12- Apresentar as regras da propriedade e os horários de trabalho para
          os trabalhadores;
        </Text>
        <Text variant="bodyLarge">
          13- Dar início ao trabalho propriamente dito;
        </Text>
        <Text variant="bodyLarge">
          14- Depois que terminar o trabalho ou a colheita, encaminhar a
          rescisão de cada contrato de trabalho com o contador;
        </Text>
        <Text variant="bodyLarge">
          15- Fazer o pagamento dos dias ou horas trabalhadas e o depósito das
          obrigações sociais (FGTS, IRRF, etc.)
        </Text>
        <Text variant="bodyLarge">
          16- Assinar a rescisão e entregar para o trabalhador juntamente com as
          guias do FGTS
        </Text>
        <Text variant="bodyLarge">
          Ou contratar uma empresa que faça tudo isso!
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">CONTRATO DE SAFRA</Text>
        <Text variant="bodyLarge">
          • Regulado pela Lei 5.889/73 e exclusivo da atividade rural.
        </Text>
        <Text variant="bodyLarge">
          • É um contrato usado quando o produtor está precisando de mão de obra
          extra.
        </Text>
        <Text variant="bodyLarge">
          • Duração temporária – Não é necessário ter uma data fixa
          pré-determinada para a finalização.
        </Text>
        <Text variant="bodyLarge">
          • Para as atividades que vão desde o preparo do solo até a colheita.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">QUAIS OS DIREITOS DOS SAFRISTAS?</Text>
        <Text variant="bodyLarge">a) Registro do trabalhador no E-social;</Text>
        <Text variant="bodyLarge">
          b) Pagamento do salário no valor, na forma e no prazo estabelecidos em
          lei;
        </Text>
        <Text variant="bodyLarge">
          c) Pagamento do 13º (décimo terceiro) salário;
        </Text>
        <Text variant="bodyLarge">
          d) Pagamento de adicional noturno, de periculosidade ou de
          insalubridade;
        </Text>
        <Text variant="bodyLarge">
          e) Limitação da jornada de trabalho e pagamento das horas extras;
        </Text>
        <Text variant="bodyLarge">f) Concessão de intervalos e folgas;</Text>
        <Text variant="bodyLarge">
          g) Concessão de férias (1/3 do salário);
        </Text>
        <Text variant="bodyLarge">
          h) Recolhimentos e repasses (FGTS, INSS e Sindicatos);
        </Text>
        <Text variant="bodyLarge">
          i) Garantia das condições de saúde e segurança do trabalho.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">RESCISÃO DO CONTRATO DE SAFRA</Text>
        <Text variant="bodyLarge">
          Como o contrato de safra é um tipo de contrato por prazo determinado,
          seu término regular após a colheita pode ser feito sem a concessão de
          aviso prévio e sem o pagamento da multa sobre os depósitos de FGTS.
        </Text>
        <Text variant="titleLarge">CUIDADO:</Text>
        <Text variant="bodyLarge">
          No entanto, se o contrato for finalizado antes do término do período
          de safra, são devidos o aviso prévio, a multa indenizatória
          correspondente a metade dos salários que o empregado teria direito até
          o fim do contrato e a multa sobre os depósitos do FGTS. No aviso
          prévio, o empregado terá direito a um dia por semana para procurar
          outro trabalho sem desconto de salário.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          CUSTO PARA CONTRATAÇÃO DE TEMPORÁRIOS
        </Text>
        <Image
          source={SalaryImg}
          style={{ marginBottom: 20 }}
          alt="wheat field"
        />
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">CONTRATO DE TRABALHO INTERMITENTE</Text>
        <Text variant="bodyLarge">
          Se aplica a qualquer tipo de atividade, desde que a prestação de
          serviços não seja contínua, mas, sim, intercalada ao longo do ano. Nos
          períodos em que o trabalhador não prestar serviços ao empregador, não
          é devida remuneração. Regido pela CLT, artigo 443, §3º e artigo 452-A.
        </Text>
        <View>
          <Text variant="bodyLarge">
            a) Registrar o trabalhador no E-social;
          </Text>
          <Text variant="bodyLarge">
            b) Registrar o trabalhador no E-social;
          </Text>
          <Text variant="bodyLarge">
            c) Realizar a convocação para o trabalho por qualquer meio de
            comunicação (telefone, mensagem de texto, áudio...) com antecedência
            mínima de três dias;
          </Text>
          <Text variant="bodyLarge">
            d) Após recebida a comunicação, o trabalhador tem 01 (um) dia útil
            para dizer se aceita ou não a convocação para o trabalho.
          </Text>
          <Text variant="bodyLarge">
            e) As partes devem cumprir o combinado. Se qualquer uma delas
            (empregador ou trabalhador) agir de forma contrária sem motivo
            justo, deverá pagar à outra uma indenização de 50% do valor dos
            serviços no prazo de 30 (trinta) dias. No mesmo prazo, as partes
            podem compensar os serviços que deixaram de ser prestados conforme o
            combinado inicial;
          </Text>
          <Text variant="bodyLarge">
            f) Pagamento dos valores proporcionais de férias com adicional de
            1/3 e do 13º salário, além do pagamento de repouso semanal
            remunerado e adicionais legais ao final de cada período de prestação
            de serviços, mediante recibo;
          </Text>
          <Text variant="bodyLarge">
            g) Garantia das condições de saúde e segurança do trabalho.
          </Text>
        </View>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">CONTRATO INTERMITENTE</Text>
        <Text variant="bodyLarge">
          O contrato de trabalho intermitente permite uma prestação de serviço
          não contínua, ou seja, que não acontece todos os dias, alternando-se
          períodos de atividade e inatividade. É um contrato que respeita os
          mesmos direitos dos demais contratos, com vínculo de emprego,
          subordinação e direitos trabalhistas.
        </Text>
        <Text variant="headlineSmall">VANTAGENS DO CONTRATO INTERMITENTE</Text>
        <Text variant="bodyLarge">
          Ao efetivar esse contrato o produtor não precisa ficar com o empregado
          todos os dias do mês se a sua colheita durou apenas 10 dias e precisa
          esperar outra uva amadurecer. Desta forma, pode liberar o trabalhador
          e chamá-lo novamente para colher quando chegar o tempo certo. Neste
          tempo o empregado pode prestar serviço para outro empregador, voltando
          quando for novamente chamado.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE TERCEIRIZAÇÃO</Text>
        <Text variant="bodyLarge">
          Pela Lei 13.429/17 qualquer atividades da propriedade, seja na
          atividade-meio ou na atividade-fim pode ser terceirizada. A
          terceirização está prevista Lei nº 6.019/1974.
        </Text>
        <Text variant="bodyLarge">
          • O produtor ou empresário rural, ao invés de contratar trabalhadores
          diretamente, pode contratar uma empresa que irá assumir a execução de
          qualquer uma de suas atividades.
        </Text>
        <Text variant="bodyLarge">
          • Essa empresa será a responsável por contratar os próprios
          trabalhadores que executarão as atividades.
        </Text>
        <Text variant="bodyLarge">
          • Não é necessário fixar o prazo para a prestação dos serviços.
        </Text>
        <Text variant="bodyLarge">
          • Ao contratar uma empresa de prestação de serviços, o produtor ou
          empresário rural delega completamente a execução das atividades
          especificadas e não mais interfere na gestão e organização dos
          serviços, nem no processo de seleção, contratação e demissão dos
          trabalhadores.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          QUAIS OS DIREITOS DO EMPREGADO TERCEIRIZADO?
        </Text>
        <Text variant="bodyLarge">
          O terceirizado tem os mesmos direitos que qualquer trabalhador, como
          registro na carteira de trabalho, férias, 13º salário proporcional,
          descanso semanal remunerado, FGTS, salário família, INSS e jornada de
          44 horas semanais.
        </Text>
        <Text variant="headlineSmall">VANTAGENS DA TERCEIRIZAÇÃO</Text>
        <Text variant="bodyLarge">
          A vantagem ao contratar uma empresa especialista na atividade rural é
          que ela deve cuidar dos aspectos administrativo e burocráticos, como
          exame admissional, registro no e-Social, recrutamento de pessoal,
          contador, etc., podendo evitar desperdícios e gastos excessivos com
          folha de pagamento.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">RISCO DE CONTRATO</Text>
        <Text variant="bodyLarge">
          O risco é contratar uma empresa sem tradição no serviço e sem
          conhecimento específico do serviço. Por isso é sempre conveniente
          verificar o histórico e toda a documentação da empresa, além das
          licenças para funcionamento.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE EMPREITEIRO</Text>
        <Text variant="bodyLarge">
          O contrato de empreiteiro equivale a um contrato de terceirização,
          pelo qual um terceiro assume o serviço na propriedade do produtor.
          Esse contrato pode ser por empreitada ou por produção, mas de qualquer
          forma todo o pessoal que ele contrata deve estar devidamente
          cadastrado e com carteira assinada, sob pena de caracterizar
          contratação ilegal.
        </Text>
        <Text variant="headlineSmall">VIZINHOS E PARENTES</Text>
        <Text variant="bodyLarge">
          Contratar vizinhos ou parentes é permitido desde que seja de uma forma
          legal, ou seja, dentro da lei. Para tanto é importante sempre
          estabelecer algum contrato formal, como safrista, autônomo ou
          intermitente e recolher o INSS e todos os demais direitos. Essa
          formalidade é fundamental para evitar ações trabalhistas ou
          indenizações por eventuais acidentes de trabalho.
        </Text>
        <Text variant="headlineSmall">FILHOS</Text>
        <Text variant="bodyLarge">
          Se menores, não devem ser contratados. Membros da família, podem ficar
          sem remuneração, pois o trabalho em família não precisa ser
          remunerado. No entanto sempre é bom formalizar um contrato de trabalho
          e recolher o INSS, seja para contribuir com a previdência, seja para
          amparar em caso de doença ou acidente do trabalho.
        </Text>
        <Text variant="headlineSmall">CONTRATO DE PRODUÇÃO</Text>
        <Text variant="bodyLarge">
          Esse tipo de contrato sempre é muito usado para safras de frutas, em
          que um empreiteiro assume toda a colheita, sendo remunerado apenas
          pelo que colher. No entanto, mesmo sendo aparentemente mais vantajoso
          para o produtor, é um contrato que deve ser formalizado e os direitos
          trabalhistas garantidos para todos os trabalhadores, sob pena da
          fiscalização do Ministério do Trabalho e Emprego considerar um
          contrato ilegal.
        </Text>
        <Text variant="headlineSmall">SEGURANÇA DO PRODUTOR</Text>
        <Text variant="bodyLarge">
          O produtor deve se preocupar também em garantir a sua segurança e a
          segurança de sua família, cuidando para contratar pessoas que não
          sejam foragidas da justiça criminal. Casos em que os produtores não
          têm registro nem documentos dos trabalhadores, podendo ser
          surpreendidos com agressões, roubos, etc., por isso sempre é
          importante, ao contratar alguém, buscar referências, currículos,
          comprovantes de endereço e indicações seguras, além de toda a
          documentação, incluindo a dos seus filhos.
        </Text>
        <Text variant="headlineSmall">ATRAVESSADORES</Text>
        <Text variant="bodyLarge">
          Atravessadores são pessoas que sempre têm uma solução para o problema
          da mão de obra, indicando ou levando pessoas muitas vezes em situação
          irregular ou para trabalhar sem carteira assinada. Cuidado, porque
          eles nunca se responsabilizam pelo pessoal, recaindo sobre o produtor
          toda a fiscalização. Cuidado também porque muitas dessas pessoas
          indicadas para trabalhar chegam sem documentos, são menores, com
          passagem pela polícia ou foragidos do sistema penal. Mas o pior
          acontece quando o atravessador fica com o salário desse trabalhador,
          podendo caracterizar uma relação indevida. Todo o cuidado é pouco.
        </Text>
        <Text variant="headlineSmall">Estrangeiros</Text>
        <Text variant="bodyLarge">
          O estrangeiro que ingressa no Brasil, seja por via rodoviária ou aérea
          ou marítima, necessita realizar o procedimento de migração, junto aos
          Postos de Controle de Imigração ou Postos de Entrada da Polícia
          Federal. O estrangeiro que ingressa no Brasil com o objetivo de
          exercer atividade profissional deve obter a Autorização de Residência
          para Fins Laborais e o Registro Nacional Migratório (RNE), documentos
          necessários para obtenção da CTPS Digital. A solicitação pode ser
          realizada eletronicamente, por meio do Sistema de Gestão e Controle de
          Imigração (MigranteWeb), antes do ingresso no Brasil, ou nas unidade
          da Polícia Federal, caso o trabalhador já esteja em território
          nacional. Ao regularizar sua situação no país – o estrangeiro pode
          emitir o CPF e a CTPS.
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          AO RECEBER A FISCALIZAÇÃO DO TRABALHO
        </Text>
        <Text variant="bodyLarge">
          Ter atitude colaborativa Não agredir ou reclamar da LEGISLAÇÃO
          Responder às perguntas Apresentar documentos.
        </Text>
        <Text variant="bodyLarge">
          “A postura como se recebe a fiscalização pode determinar a forma como
          os fiscais farão seu trabalho.”
        </Text>
        <Text variant="titleLarge">1) Registro dos trabalhadores - CTPS</Text>
        <Text variant="titleLarge">
          2) Condições de alimentação e alojamento
        </Text>
        <Text variant="titleLarge">3) Nenhum menor trabalhando</Text>
        <Text variant="headlineSmall">Foco da ação dos Auditores do MTE</Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          FISCALIZAÇÃO do Ministério do Trabalho e Emprego
        </Text>
        <Text variant="titleLarge">Principio da Dupla Visita:</Text>
        <Text variant="bodyLarge">
          • A fiscalização trabalhista possui atuação “predominantemente” de
          orientação (princípio da dupla visita).
        </Text>
        <Text variant="bodyLarge">
          • Salvo algumas situações específicas, conforme legislação, não haverá
          penalização na primeira visita em uma propriedade rural.
        </Text>
        <Text variant="bodyLarge">
          • As exceções a esse princípio, são: falta de registro de empregados,
          ocorrência de. embaraço, existência de fraude, trabalho escravo e
          situações de grave e iminente risco.
        </Text>
        <Text variant="bodyLarge">
          • Na primeira visita a uma propriedade rural, se ela não incorrer em
          nenhum dos itens acima, não haverá a lavratura de nenhum auto de
          infração (penalidade).
        </Text>
        <Text variant="titleLarge">EXEMPLO:</Text>
        <Text variant="bodyLarge">
          • Se na primeira inspeção todos os empregados estiverem devidamente
          registrados, e houver algum problema com o alojamento, ele será
          orientada a regularizar, sem imposição de penalidade.
        </Text>
        <Text variant="bodyLarge">
          • Por outro lado, se na primeira ação fiscal, for verificado a falta
          de registro de algum empregado, sempre haverá a imposição de
          penalidade, pois essa é uma das exceções ao princípio da dupla visita.
        </Text>
        <Text variant="bodyLarge">
          • Estando todos os empregados regulares, a chance de autuação numa
          primeira inspeção é muito pequena (só se ela incorresse numa das
          outras exceções).
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">
          VERIFICAÇÃO do Ministério do Trabalho e Emprego
        </Text>
        <Text variant="titleLarge">
          Além da documentação, o MTE irá verificar:
        </Text>
        <View>
          <Text variant="bodyLarge">• EPIs,</Text>
          <Text variant="bodyLarge">• Água,</Text>
          <Text variant="bodyLarge">
            • Alojamento: condições gerais (camas para todos, limpeza, armários,
            roupas de cama), instalações elétricas,
          </Text>
          <Text variant="bodyLarge">
            • Banheiros: limpeza, quantidade de vasos sanitários e chuveiros
          </Text>
          <Text variant="bodyLarge">
            • Local de refeição: limpeza, se possui dimensionamento para atender
            a todos os trabalhadores.
          </Text>
          <Text variant="bodyLarge">
            • O produtor rural deve se perguntar se ele se sujeitaria ou
            sujeitaria alguém da sua família ao locais de alojamento e
            refeitório disponibilizados. Se a resposta for “sim” é um bom
            indicativo que está tudo certo.
          </Text>
        </View>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall" style={{ textAlign: 'center' }}>
          NA LAVOURA, TODO TRABALHO DEVE SER REGULARIZADO
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <SocialMedias />
      </ScrollView>
    </View>
  )
}
