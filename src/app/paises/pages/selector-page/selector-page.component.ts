import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisesSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {
  public miFormulario!: FormGroup;
  public regiones: string[] = [];
  public paises: PaisesSmall[] = [];
  public fronteras: PaisesSmall[] = [];
  public cargando: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.buildForm();
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap((region: string) => this.paisesService.getCountriesByRegion(region))
      )
      .subscribe((paises: PaisesSmall[]) => {
        this.paises = paises;
        this.cargando = false;
      });

    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        switchMap((code: string) => this.paisesService.getCountryByCode(code)),
        switchMap((pais: Pais[]) => this.paisesService.getCountriesByCodes(pais[0]?.borders))
      )
      .subscribe((paises: PaisesSmall[]) => {
        this.cargando = false;
        this.fronteras = paises;
      });
  }

  private buildForm(): void {

    this.miFormulario = this.formBuilder.group({
      region: ['', Validators.required],
      pais: ['', Validators.required],
      frontera: ['', Validators.required]
    });

  }

  public guardar(): void {
    console.log(this.miFormulario.value);
  }

}
