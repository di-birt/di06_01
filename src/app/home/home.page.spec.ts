import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MiServicioService } from '../service/mi-servicio.service';
import { MicomponenteComponent } from '../component/micomponente/micomponente.component';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let servicio: MiServicioService;
  let miComponente: MicomponenteComponent;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [MiServicioService, MicomponenteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    miComponente = TestBed.inject(MicomponenteComponent);
    servicio = TestBed.inject(MiServicioService);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  
    fixture.detectChanges();
  });

  it('should create HomePage component', () => {
    expect(component).toBeTruthy();
  });

  it('Debería tener el titulo "Mi primer testing"', () => {
    expect(component.titulo).toEqual('Mi primer testing');
  });

  it('Debería existir en MiComponente una variable llamado "miVariable" y se inicialice como un array vacío',() => {
    //Comprobamos que exista la variable
    expect(miComponente.miVariable).toBeTruthy();
    //Comprobamos que sea []
    expect(miComponente.miVariable).toEqual([]);
  });

  it('En el Html debería imprimir "Hola Mundo" con un div y una p', () => {
    expect(compiled.querySelector('div > p').textContent).toContain('Hola Mundo');
  });

  it('Debería de sumar dos número', () => {
    const mockedData = {num1: 2, num2: 3};
    const resultadoEsperado = 5;
    const resultado = miComponente.suma(mockedData.num1, mockedData.num2);
    expect(resultado).toEqual(resultadoEsperado);
  });

});
