
export const AIH_ESTADOS = {
  'AC': '12', 'AL': '27', 'AP': '16', 'AM': '13', 'BA': '29', 'CE': '23', 'DF': '53',
  'ES': '32', 'GO': '52', 'MA': '21', 'MT': '51', 'MS': '50', 'MG': '31', 'PA': '15',
  'PB': '25', 'PR': '41', 'PE': '26', 'PI': '22', 'RJ': '33', 'RN': '24', 'RS': '43',
  'RO': '11', 'RR': '14', 'SC': '42', 'SP': '35', 'SE': '28', 'TO': '17'
};
export const AIH_TIPOS = {
  '1': 'AIH Normal',
  '2': 'APACs',
  '3': 'Códigos de procedimentos específicos da CNRAC',
  '4': 'APACs da CNRAC',
  '5': 'Procedimentos de longa permanência na AIH'
};

export const CID_NAME = {
  'A00-B99': 'Algumas doenças infecciosas e parasitárias',
  'C00-D48': 'Neoplasmas (tumores)',
  'D50-D89': 'Doenças do sangue e dos órgãos hematopoéticos e alguns transtornos imunitários',
  'E00-E90': 'Doenças endócrinas, nutricionais e metabólicas',
  'F00-F99': 'Transtornos mentais e comportamentais',
  'G00-G99': 'Doenças do sistema nervoso',
  'H00-H59': 'Doenças do olho e anexos',
  'H60-H95': 'Doenças do ouvido e da apófise mastoide',
  'I00-I99': 'Doenças do aparelho circulatório',
  'J00-J99': 'Doenças do aparelho respiratório',
  'K00-K93': 'Doenças do aparelho digestivo',
  'L00-L99': 'Doenças da pele e do tecido subcutâneo',
  'M00-M99': 'Doenças do sistema osteomuscular e do tecido conjuntivo',
  'N00-N99': 'Doenças do aparelho geniturinário',
  'O00-O99': 'Gravidez, parto e puerpério',
  'P00-P96': 'Algumas afecções originadas no período perinatal',
  'Q00-Q99': 'Malformações congênitas, deformidades e anomalias cromossômicas',
  'R00-R99': 'Sintomas, sinais e achados anormais de exames clínicos e de laboratório, não classificados em outra parte',
  'S00-T98': 'Lesões, envenenamentos e algumas outras conseqüências de causas externas',
  'V01-Y98': 'Causas externas de morbidade e de mortalidade',
  'Z00-Z99': 'Fatores que influenciam o estado de saúde e o contato com os serviços de saúde',
  'U00-U99': 'Códigos para propósitos especiais',
}

export const CID_REGEX = {
  'A00-B99': /[A|B][0-9][0-9]/g,
  'C00-D48': /[C0-90-9|[D0-90-9]/g,
  'D50-D89': /[A|B][0-9][0-9]/g,
  'E00-E90': /[A|B][0-9][0-9]/g,
  'F00-F99': /[A|B][0-9][0-9]/g,
  'G00-G99': /[A|B][0-9][0-9]/g,
  'H00-H59': /[A|B][0-9][0-9]/g,
  'H60-H95': /[A|B][0-9][0-9]/g,
  'I00-I99': /[A|B][0-9][0-9]/g,
  'J00-J99': /[A|B][0-9][0-9]/g,
  'K00-K93': /[A|B][0-9][0-9]/g,
  'L00-L99': /[A|B][0-9][0-9]/g,
  'M00-M99': /[A|B][0-9][0-9]/g,
  'N00-N99': /[A|B][0-9][0-9]/g,
  'O00-O99': /[A|B][0-9][0-9]/g,
  'P00-P96': /[A|B][0-9][0-9]/g,
  'Q00-Q99': /[A|B][0-9][0-9]/g,
  'R00-R99': /[A|B][0-9][0-9]/g,
  'S00-T98': /[A|B][0-9][0-9]/g,
  'V01-Y98': /[A|B][0-9][0-9]/g,
  'Z00-Z99': /[A|B][0-9][0-9]/g,
  'U00-U99': /[A|B][0-9][0-9]/g,
}

