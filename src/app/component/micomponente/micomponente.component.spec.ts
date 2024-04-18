import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicomponenteComponent } from './micomponente.component';
import { MiServicioService } from 'src/app/service/mi-servicio.service';
import { Observable, of } from 'rxjs';
import { RespuestaNoticias } from 'src/app/interfaces/interfaces';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MicomponenteComponent', () => {
  let component: MicomponenteComponent;
  let fixture: ComponentFixture<MicomponenteComponent>;
  let httpMock: HttpTestingController;

  const mockedJsonInfo: RespuestaNoticias = {
    "status": "ok",
    "totalResults": 2,
    "articles": [
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Tony Romm",
        "title": "Debt ceiling vote in Senate to be blocked by Republicans - The Washington Post",
        "description": "The GOP's expected opposition is sure to deal a death blow to the measure, which had passed the House, and adds to the pressure on Democrats to devise their own path forward ahead of a series of urgent fiscal deadlines starting this week.",
        "url": "https://www.washingtonpost.com/us-policy/2021/09/27/senate-debt-ceiling-government-shutdown/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RUHMA7A4VEI6ZPVIGCHKCNCZJ4.jpg&w=1440",
        "publishedAt": "2021-09-27T14:40:20Z",
        "content": "Ahead of the planned Monday vote, Senate Minority Leader Mitch McConnell (R-Ky.) staked his partys position that Republicans are not willing to vote for any measure that raises or suspends the debt c… [+5463 chars]"
      },
      {
        "source": { "id": undefined, "name": "Barron's" },
        "author": undefined,
        "title": "Apple and Tesla Suppliers Hit By Global Energy Crisis. What to Know. - Barron's",
        "description": "Debt ceiling and infrastructure spending in Congress this week, German elections leave no clear winner, Chinese agencies take steps to shield consumer funds from Evergrande crisis, and other news to start your day.",
        "url": "https://www.barrons.com/articles/things-to-know-today-51632735533",
        "urlToImage": "https://images.barrons.com/im-407144/social",
        "publishedAt": "2021-09-27T14:10:00Z",
        "content": "A worldwide energy shortage is threatening to develop into a full-blown crisis.\r\nThe scenes in the U.K. over the weekend were reminiscent of the 1970s, as drivers queued at thousands of filling stati… [+271 chars]"
      }
    ]
  };

  const mockedMiServicioService: {
    //Nombre del método => tipo devuelto por el método
    getInformacion: () => Observable<string[]>;
    setInformation: () => void;
    getDatosDesdeJson: () => Observable<RespuestaNoticias>;
  } = {
    //Nombre del método () => valores asignados
    //Es un observable de strings, lo inicializamos a ''
    getInformacion: () => of(['']),
    setInformation: () => {},
    getDatosDesdeJson: () => of(mockedJsonInfo),
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MicomponenteComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        {
          provide: MiServicioService,
          useValue: mockedMiServicioService
        }
      ]
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(MicomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Simularemos que llamamos al método getDatosDesdeJson y forzaremos que nos devuelva el valor de nuestro mock
  it('Debería llamar al método getDatosDesdeJson',  () => {
    spyOn(mockedMiServicioService, 'getDatosDesdeJson').and.returnValue(of(mockedJsonInfo));
    component.getMiJson();
    expect(mockedMiServicioService.getDatosDesdeJson).toHaveBeenCalled();
    expect(component.miData).toEqual(mockedJsonInfo);
  });
});
