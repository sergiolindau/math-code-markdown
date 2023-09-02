import { MathCodeMarkdown } from '../src/index';

console.log('Starting test...')

const data = `Em [[astronomia]], [com] aplicações na [[cronologia]] de acontecimentos históricos, o ***dia juliano*** ou ***data juliana*** é um método de contar os dias sequencialmente, sem a separação em semanas, meses ou anos, que foi proposto por Joseph Justus Scaliger no ano de 1583.

Os dias e frações são contados de forma contínua, a partir de uma data arbitrária no passado. Sua origem (que corresponde a 0.0) é o meio-dia do dia 1 de janeiro de 4713 a.C. pelo calendário juliano, ou 24 de novembro de 4714 a.C., pelo calendário gregoriano, que precede qualquer data nos registros históricos.`;

console.log(MathCodeMarkdown.replaceReferences(data, (ref) => ref));
