1) const botoes = document.querySelectorAll(".botao");
2) const textos = document.querySelectorAll(".aba-conteudo");
3)
4) for (let i = 0; i < botoes.length; i++) {
5) botoes[i].onclick = function () {
6)
7) for (let j = 0; j < botoes.length; j++) {
8) botoes[j].classList.remove("ativo");
9) textos[j].classList.remove("ativo");
10) }
11)
12) botoes[i].classList.add("ativo");
13) textos[i].classList.add("ativo");
14) }
15) }
16)
17) const contadores = document.querySelectorAll(".contador");
18) const tempoObjetivo1 = new Date("2024-12-01T00:00:00");
19) const tempoObjetivo2 = new Date("2024-12-01T00:00:00");
20) const tempoObjetivo3 = new Date("2024-10-01T00:00:00");
21) const tempoObjetivo4 = new Date("2024-08-01T00:00:00");
22)
23) const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
24)
25) function calculaTempo(tempoObjetivo) {
26) let tempoAtual = new Date();
27) let tempoFinal = tempoObjetivo - tempoAtual;
28) let segundos = Math.floor(tempoFinal / 1000);
29) let minutos = Math.floor(segundos / 60);
30) let horas = Math.floor(minutos / 60);
31) let dias = Math.floor(horas / 24);
32)
33) segundos %= 60;
34) minutos %= 60;
35) horas %= 24;
36) if (tempoFinal > 0){
37) return [dias,horas,minutos,segundos];
38) } else {
39) return [0,0,0,0];
40) }
41) }
42)
43) function atualizaCronometro(){
44) for (let i=0; i<contadores.length;i++){
45) document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
46) document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
47) document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
48) document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
49) }
50) }
51)
52) function comecaCronometro(){
53) atualizaCronometro();
54) setInterval(atualizaCronometro,1000);
55) }
56)
57) comecaCronometro();