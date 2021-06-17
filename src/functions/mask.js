// https://github.com/DieguinhoHR/react-js-masks/blob/master/src/utils/masks.js
export const cpfMask = (value) => {
  let cpfFmt = value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  return cpfFmt
}

export const cnpjMask = (value) => {
  let cnpjFmt = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  return cnpjFmt
}

export const phoneMask = (value) => {
  let phoneFmt = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
  return phoneFmt
}

export const cepMask = (value) => {
  let cepFmt = value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
  return cepFmt
}

export const pisMask = (value) => {
  let pisFmt = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
    .replace(/(-\d{1})\d+?$/, '$1')
  return pisFmt
}
/*
export const alphaMask = value => {
  let alphaFmt = value
  .replace(/\[A-Z]/g,'$1')
  return alphaFmt
}
*/

export const emailMask = (value) => {
  let emailFmt = value.replace(/[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+/g, '$1')
  return emailFmt
}

export const dateMask = (value) => {
  let dateFmt = ''
  if (value) {
    dateFmt = value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1/$2')
  }
  return dateFmt
}
