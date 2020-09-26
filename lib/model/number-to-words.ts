/**
 * Convert numbers to words.
 *
 * Refactored to make it less obscure.
 *
 * Original Copyright, 25th July 2006, by Stephen Chapman
 */

// http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

export const numberToWords = (s: number | string, langCode = 'en'): string => {
  let thousies: string[] = []
  let unit: string[] = []
  let teenies: string[] = []
  let tweenies: string[] = []
  let hundred: string = 'hundred'

  if (langCode.startsWith('fr')) {
    hundred = 'cent'
    thousies = ['', 'mille', 'million', 'billion', 'trillion']
    unit = [
      'zero',
      'un',
      'deux',
      'trois',
      'quatre',
      'cinq',
      'six',
      'sept',
      'huit',
      'neuf',
    ]
    teenies = [
      'dix',
      'onze',
      'douze',
      'treize',
      'quatorze',
      'quinze',
      'seize',
      'dix-sept',
      'dix-huit',
      'dix-neuf',
    ]
    tweenies = [
      'vingt',
      'trente',
      'quarante',
      'cinquante',
      'soixante',
      'soixante-dix',
      'quatre-vingt', // octante
      'quatre-vingt-dix', // nonante
    ]
  } else {
    // Defaults to English
    // American Numbering System
    thousies = ['', 'thousand', 'million', 'billion', 'trillion']
    // thousies = ['','thousand','million', 'milliard','billion'];
    unit = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ]
    teenies = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ]
    tweenies = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ]
  }

  s = s.toString()
  s = s.replace(/[,\s]/g, '')
  if (Number.isNaN(+s)) {
    throw new TypeError('not a number')
  }
  let x = s.indexOf('.')
  // eslint-disable-next-line eqeqeq
  if (x == -1) {
    // ^ as per original implementation
    x = s.length
  }
  if (x > 15) {
    throw new Error('too big')
  }
  const n = s.split('')
  let str = ''
  let sk = 0
  for (let i = 0; i < x; i++) {
    // eslint-disable-next-line eqeqeq
    if ((x - i) % 3 == 2) {
      // eslint-disable-next-line eqeqeq
      if (n[i] == '1') {
        str += teenies[Number(n[i + 1])] + ' '
        i++
        sk = 1
      } else if (+n[i] !== 0) {
        str += tweenies[+n[i] - 2] + ' '
        sk = 1
      }
    } else if (+n[i] !== 0) {
      str += unit[+n[i]] + ' '
      if ((x - i) % 3 === 0) {
        str += hundred + ' '
      }
      sk = 1
    }
    if ((x - i) % 3 === 1) {
      if (sk) {
        str += thousies[(x - i - 1) / 3] + ' '
      }
      sk = 0
    }
  }

  return str.trim()
}
