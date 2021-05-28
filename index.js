const puppeteer = require('puppeteer');
// const readlineSync = require(readline-sync)
const readlineSync = require('readline-sync')


console.log('bem vindo ao nosso conversor');


// 
async function robot(){
  
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // const moedaBase = 'dolar'
  const moedaBase = readlineSync.question(' infome a moeda base ') || 'dolar'
  // const moedaFinal = 'real'
  const moedaFinal = readlineSync.question('infor a moeda desejada ') || 'real'


  const qualquerUrl = `https://www.duolingo.com/`
  const qualquerUrlGoogle = `https://www.google.com/search?q=converter+${moedaBase}+para+${moedaFinal}&sxsrf=ALeKk00aZBEwLj-7EnbCLCcBzl7azrqUYQ%3A1622089000394&ei=KB2vYOe_F-yj5OUPjfaSsAY&oq=converter+dolar+para+r&gs_lcp=Cgdnd3Mtd2l6EAMYADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgAEEcQsAM6BwgAELADEEM6BAgAEA06BggAEAcQHjoICAAQBxAKEB46CAgAEAgQBxAeOgcIABBGEIICOgYIABAIEB46BAghEApQu29Y2q4BYKe_AWgBcAJ4AIAB1AGIAYQTkgEGMC4xMC4zmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz`
  await page.goto(qualquerUrlGoogle);
  await page.screenshot({ path: 'example-google.png' });

  const resultado = await page.evaluate (()=>{
    return {
      valorMoedaFinal: document.querySelector(`.a61j6.vk_gy.vk_sh.Hg3mWc`).value
    }
  })

 console.log(resultado);
  console.log(`o valor de 1 ${moedaBase} em ${moedaFinal} é: ${resultado.valorMoedaFinal}`)

  await setTimeout(() => {
     browser.close();
  }, 13345); 
}
robot()
