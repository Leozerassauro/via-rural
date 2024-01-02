import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function faqs() {
  await prisma.faqs.createMany({
    data: [
      {
        code: 1,
        title: 'Qual o valor por dia do empregado para safra uva?',
        body: 'O valor por dia fica em 220 reais por pessoa. Esse valor inclui todos os direitos como salário com carteira assinada, além das férias, 13º salario, FGTS, INSS e transporte para chegar até a propriedade.',
        user_type: 'PRODUCER',
      },
      {
        code: 2,
        title: 'Carteira assinada e leis trabalhistas, como ficam?',
        body: 'A Via Rural assina a carteira de todos os seus trabalhadores e paga integralmente os seus direitos trabalhistas.',
        user_type: 'PRODUCER',
      },
      {
        code: 3,
        title: 'Quantas horas o empregado, pode trabalhar por dia?',
        body: 'Por dia o trabalhador pode trabalhar até 10hs. Seriam 8hs + 2hs extras.',
        user_type: 'PRODUCER',
      },
      {
        code: 4,
        title:
          'Se o agricultor contrata direto esse empregado, como fica sua aposentadoria?',
        body: 'Se o agricultor contratar direto um empregado rural, esse contrato pode ser no máximo de 120 dias por ano, ou 60 dias se forem duas pessoas, caso contrário ele pode perde a sua condição de segurado especial no INSS. Neste caso é melhor contratar uma empresa terceirizada, como a Via Rural, que assume todos os trabalhadores e o agricultor não corre o risco de perder sua aposentadoria.',
        user_type: 'PRODUCER',
      },
      {
        code: 5,
        title: 'Acidente de trabalho',
        body: 'Em caso de acidente o importante é o empregado ter carteira assinada, pois assim o INSS assume todo o tratamento desse empregado e inclusive pode lhe aposentar, se for o caso.',
        user_type: 'PRODUCER',
      },
      {
        code: 6,
        title: 'Seguro de vida',
        body: 'A Via Rural também tem um seguro contra acidente de trabalho que é pago para o empregado e sua família.',
        user_type: 'PRODUCER',
      },
      {
        code: 7,
        title: 'Contrato de trabalho',
        body: 'A Via Rural cumpre integralmente o que determina a CLT, com contrato de trabalho e carteira assinada de todos os seus colaboradores, assim todos os direitos do trabalhador ficam garantidos.',
        user_type: 'PRODUCER',
      },
      {
        code: 8,
        title: 'Contrato com o Produtor',
        body: 'A Via Rural faz contrato de prestação de serviço com todos os produtores rurais, assim todos os direitos do Produtor ficam preservados.',
        user_type: 'PRODUCER',
      },
      {
        code: 9,
        title: 'Salario',
        body: 'A Via Rural paga integralmente os salários dos seus colaboradores até o quinto dia útil do mês seguinte, diretamente na conta bancária dos mesmos.',
        user_type: 'PRODUCER',
      },
      {
        code: 10,
        title: 'Alojamento e alimentação',
        body: 'No contrato da Via Rural, o alojamento e a alimentação ficam por conta do produtor rural.',
        user_type: 'PRODUCER',
      },
      {
        code: 11,
        title: 'Alojamento',
        body: 'O alojamento precisa estar de acordo com a lei, ou seja, um ambiente arejado, limpo, seguro, em boas condições de uso, com ventilação, água potável e instalações sanitárias.',
        user_type: 'PRODUCER',
      },
      {
        code: 12,
        title: 'Alimentação',
        body: 'A alimentação do trabalhador deve ser saudável, equilibrada e bem acondicionada.',
        user_type: 'PRODUCER',
      },
      {
        code: 13,
        title: 'Intervalo para refeição',
        body: 'Todos os trabalhadores tem direito a uma hora de intervalo por dia para realizar a sua refeição.',
        user_type: 'PRODUCER',
      },
      {
        code: 14,
        title: 'Horas extras',
        body: 'O trabalhador pode realizar por dia no máximo 2 (duas) horas extras.',
        user_type: 'PRODUCER',
      },
      {
        code: 15,
        title: 'EPIs',
        body: 'A Via Rural se responsabiliza por todos os equipamentos de proteção dos seus trabalhadores.',
        user_type: 'PRODUCER',
      },
      {
        code: 16,
        title: 'Substituição de trabalhadores',
        body: 'Se houver algum problema na execução do trabalho a Via Rural substitui o trabalhador.',
        user_type: 'PRODUCER',
      },
      {
        code: 17,
        title: 'Férias',
        body: 'Conforme a CLT, as férias são um direito de todo o trabalhador de usufruir um mês de férias a cada período de 12 meses de trabalho, ou de ser indenizado de forma proporcional ao que trabalhar.',
        user_type: 'PRODUCER',
      },
      {
        code: 18,
        title: '1/3 de férias',
        body: 'Conforme a CLT, além do valor das férias, todo o trabalhador tem direito de receber um adicional de 1/3 (um terço) sobre as férias.',
        user_type: 'PRODUCER',
      },
      {
        code: 19,
        title: '13º salario',
        body: 'Conforme a CLT, todo o trabalhador tem direito a receber um décimo terceiro salário toda vez que completa um ano de trabalho, ou proporcional a esse tempo.',
        user_type: 'PRODUCER',
      },
      {
        code: 20,
        title: 'FGTS',
        body: 'Conforme a CLT, o Fundo de Garantia por tempo de serviço é um direito de todo o trabalhador com carteira assinada, no valor de 8% do salário.',
        user_type: 'PRODUCER',
      },
      {
        code: 21,
        title: 'e-social',
        body: 'É a plataforma da Receita Federal onde se registram todos os contratos de trabalhadores.',
        user_type: 'PRODUCER',
      },
      {
        code: 22,
        title: 'Contador',
        body: 'É o profissional responsável pelo registro dos trabalhadores no e-social e ainda pela cálculo da folha de pagamento e todos os direitos dos trabalhadores.',
        user_type: 'PRODUCER',
      },
      {
        code: 23,
        title: 'INSS',
        body: 'Segundo a CLT o pagamento do INSS é obrigatório para todos os contratos de trabalhadores.',
        user_type: 'PRODUCER',
      },
      {
        code: 24,
        title: 'Transporte',
        body: 'A Via Rural se responsabiliza por todo o transporte dos trabalhadores, de sua cidade de origem até a propriedade do produtor.',
        user_type: 'PRODUCER',
      },
      {
        code: 25,
        title: 'Exame admissional',
        body: 'A Via Rural realiza, conforme a lei, o exame admissional em todos os seus trabalhadores com médico especializado em saúde do trabalhador.',
        user_type: 'PRODUCER',
      },
      {
        code: 26,
        title: 'Laudos ambientais',
        body: 'A Via Rural cumpre integralmente o que determina a legislação e realiza todos os laudos ambientais que são obrigatórios para a correta contratação dos seus colaboradores.',
        user_type: 'PRODUCER',
      },
      {
        code: 27,
        title: 'Quais são os laudos necessário para contratação de pessoal?',
        body: 'São três os laudos obrigatórios para contratação de pessoal com carteira assinada, o PGRTR – Programa de gerenciamento de risco no trabalho rural, o PCMSO – Programa de controle medico e saúde ocupacional e o LTCAT – laudo técnico das condições ambientais de trabalho.',
        user_type: 'PRODUCER',
      },
    ],
  })
}

async function institutional() {
  await prisma.institutional.createMany({
    data: [
      {
        code: 1,
        title: 'APRESENTAÇÃO',
        body: 'A Via Rural é uma Agência de serviços a disposição do produtor rural e da agroindústria. Dentre os serviços, temos mão de obra para a atividade rural, além de elaboração de laudos ambientais e de medicina do trabalho e serviços de contabilidade. Mas em parceira com a Studio imóveis, também oferecemos os serviços de compra e venda de imóveis rurais, regularização fundiária e ainda serviços de seguros, crédito, financiamentos e consórcios.',
        user_type: 'PRODUCER',
      },
      {
        code: 2,
        title: 'COMO FUNCIONA A CONTRATAÇÃO DE PESSOAL?',
        body: 'Nossa seleção de pessoal busca sempre aqueles que tenham um mínimo de experiência em atividade rural e sem passagem pela polícia. Depois disso elaboramos o contrato e assinamos a carteira de todos, assumindo assim o vínculo empregatícios de todos, que desta forma, livra o produtor rural de qualquer ônus sobre essa contratação. E desta forma, levamos direto para o produtor que necessita de pessoal para a safra. Portanto todos tem carteira assinada, fazem exame médico e recebem os EPIs que são obrigatórios.',
        user_type: 'PRODUCER',
      },
      {
        code: 3,
        title: 'E se o funcionário não trabalhar?',
        body: 'Se o funcionário não render a gente troca! Mas em geral o pessoal é bem interessado no serviço e trabalham muito bem.',
        user_type: 'PRODUCER',
      },
      {
        code: 4,
        title: 'Qual o horário de trabalho na safra?',
        body: 'A jornada diária conforme a CLT é de 8hs, podendo ser acrescida de até 2hs extras por dia. Portanto podemos ter até 10hs por dia.',
        user_type: 'PRODUCER',
      },
      {
        code: 5,
        title: 'Final de semana é necessário conceder folga?',
        body: 'Sim. Segundo a CLT o trabalhador tem direito a uma folga semanal remunerada. Essa folga preferencialmente terá de ser aos domingos, mas poderá ser também conforme a programação de entrega da uva na vinícola, que geralmente não recebe aos sábados.',
        user_type: 'PRODUCER',
      },
      {
        code: 6,
        title: 'A VIA RURAL',
        body: 'A Via Rural é uma empresa de serviços voltada para o setor agrícola, atuando como empresa de terceirização e também como agência de emprego e de serviços. Desta forma, seleciona e contrata seus colaboradores para suprir as demandas dos produtores rurais, pois atua com soluções para uma dos grandes gargalos da produção agrícola que é a falta de mão de obra, levando maiores oportunidades aos trabalhadores e segurança jurídica aos produtores.',
        user_type: 'PRODUCER',
      },
    ],
  })
}

faqs()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

institutional()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
