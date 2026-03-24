import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tortas-gloria',
  standalone: true,
  templateUrl: './tortas-gloria.html',
  styleUrl: './tortas-gloria.css',
})

export class Tortas implements OnInit {

  public listProducts: any[] = [];

  constructor( 
    private httpService: HttpService,
    private cdr: ChangeDetectorRef
  ) {};

  ngOnInit(): void {
    this.readAll();
  };

  readAll() {
    this.httpService.readAll().subscribe({
      next: (data: any) => {
        this.listProducts = [...data.products];
        this.cdr.detectChanges();
        console.log(this.listProducts), this.listProducts;
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err);
      }
    });
  }

}
// nav
// Carrusel variables
let btn_ant: any;
let btn_sig: any;
let slides: Element[] = [];
let carrusel: any;

let contador = 0;
let totalslide = slides.length;

let intervalos: number | undefined;
function carruselAuto() {
  intervalos = setInterval(() => {
    if (contador < totalslide - 1) {
      contador++;
    }
    else {
      contador = 0;
    }

    actualizarCarrusel();
  }, 5000);
}

function reinicioCarrusel() {
  if (intervalos) {
    clearInterval(intervalos);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  carruselAuto();
});

function actualizarCarrusel() {
  if (carrusel) {
    let desplazamiento = -contador * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
  }
}

// Setup event listeners after DOM ready
setTimeout(() => {
  if (btn_ant && btn_sig) {
    btn_ant.addEventListener('click', () => {
      if (contador > 0) {
        contador--;
      }
      else {
        contador = totalslide - 1;
      }

      actualizarCarrusel();
    });

    btn_sig.addEventListener('click', () => {
      reinicioCarrusel();
      if (contador < totalslide - 1) {
        contador++;
      }
      else {
        contador = 0;
      }
      actualizarCarrusel();

    });
  }
}, 0);

//Historia btn active
const btns_sec_4 = document.querySelectorAll(".boton");
let cards = document.querySelectorAll('.card');
// Nav setup
const btns = document.querySelectorAll("#btn_search");

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btns.forEach(btn => {
      btn.classList.remove('btn_select', 'btn_active');
    });
    const target = e.currentTarget as HTMLElement;
    target.classList.add('btn_select', 'btn_active');
  });
});

const btn_nav_act: any = document.getElementById('btn_nav');
const nav: any = document.getElementById('nav_respon');

if (btn_nav_act && nav) {
  btn_nav_act.addEventListener('click', function () {
    if (!btn_nav_act.classList.contains('btn_nav-click')) {
      btn_nav_act.classList.add('btn_nav-click');
      nav.classList.add('nav_respon-active')
      nav.classList.remove('nav_respon-desact');
    }
    else {
      btn_nav_act.classList.remove('btn_nav-click');
      nav.classList.add('nav_respon-desact');
      setTimeout(() => {
        nav.classList.remove('nav_respon-active')
      }, 500);
    }
  });
}

// Carrusel setup
btn_ant = document.getElementById('btn-ant');
btn_sig = document.getElementById('btn-sig');
const elements = document.querySelectorAll('.slide');
elements.forEach((e) => {
  (e as any).slides = [...elements];
});
carrusel = document.querySelector('.carrusel_interno');


function btn_active(btn: any) {
  btns_sec_4.forEach(btn => {
    btn.classList.remove('btn_active');
  })
  btn.classList.add('btn_active');
}

function btn_search(btn: any) {
  let filtro = btn;
  switch (filtro) {
    case 'deportes':
      cards.forEach(card => {
        if (card.id !== 'deporte') {
          card.classList.add('card_desactive');
        }
        if (card.id === 'deporte') {
          card.classList.remove('card_desactive');
        }
      })
      break;
    case 'eventos':
      cards.forEach(card => {
        if (card.id !== 'evento') {
          card.classList.add('card_desactive');
        }
        if (card.id === 'evento') {
          card.classList.remove('card_desactive');
        }
      })
      break;
    case 'donaciones':
      cards.forEach(card => {
        if (card.id !== 'donacion') {
          card.classList.add('card_desactive');
        }
        if (card.id === 'donacion') {
          card.classList.remove('card_desactive');
        }
      })
      break;
    case 'comunidades':
      cards.forEach(card => {
        if (card.id !== 'comunidad') {
          card.classList.add('card_desactive');
        }
        if (card.id === 'comunidad') {
          card.classList.remove('card_desactive');
        }
      })
      break;
    default:
      cards.forEach(card => {
        card.classList.remove('card_desactive');
      })

  }
}

btns_sec_4.forEach(btn => {
  btn.addEventListener('click', () => {
    btn_active(btn);
  });
  btn.addEventListener('click', () => {
    btn_search(btn.id)
  });
})

// Desplazamiento
window.addEventListener('scroll', function () {
  function desplazamiento(direccion: string) {
    let conts = document.querySelectorAll('.posicion_' + direccion);
    for (let x = 0; x < conts.length; x++) {
      let altura = window.innerHeight / 1.2;
      let distancia = conts[x].getBoundingClientRect().top;
      conts[x].classList.add('desplazamiento_' + direccion);
      if (distancia <= altura) {
        conts[x].classList.add('aparece');
      }
      else {
        conts[x].classList.remove('aparece');
      }
    }
  }
  desplazamiento('up');
  desplazamiento('left');
  desplazamiento('right');
})