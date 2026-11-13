(() => {
  'use strict';

  // 1. Menu móvel
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  btn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', String(aberto));
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('aberto');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // 2. Demonstração de largura responsiva
  const range = document.getElementById('largura');
  const pagina = document.getElementById('pagina');
  const saida = document.getElementById('saida');
  const nomeDispositivo = px => (px < 480 ? 'Telemóvel' : px < 700 ? 'Tablet' : 'Computador');
  const atualizar = () => {
    const px = Number(range.value);
    pagina.style.setProperty('--w', `${(px / Number(range.max)) * 100}%`);
    saida.textContent = `${px} px · ${nomeDispositivo(px)}`;
  };
  range.addEventListener('input', atualizar);
  atualizar();

  // 3. Formulário (abre o cliente de email; altere o endereço abaixo)
  const EMAIL = 'jobcalvin777@gmail.com';
  const form = document.getElementById('form');
  const erro = document.getElementById('erro');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const nome = (d.get('nome') || '').trim();
    const email = (d.get('email') || '').trim();
    const msg = (d.get('msg') || '').trim();
    if (!nome || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
      erro.textContent = 'Preencha o nome, um email válido e a mensagem.';
      erro.hidden = false;
      return;
    }
    erro.hidden = true;
    const assunto = encodeURIComponent(`Contacto via portfólio — ${nome}`);
    const corpo = encodeURIComponent(`${msg}\n\n${nome} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`;
  });

  // 4. Ano do rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
