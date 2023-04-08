import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais, PaisesSmall } from '../interfaces/paises.interface';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private httpClient: HttpClient) { }

  public get regiones(): string[] {
    return [...this._regiones];
  }

  public getCountriesByRegion(region: string): Observable<PaisesSmall[]> {

    if (!region) {
      return of([]);
    }

    return this.httpClient.get<PaisesSmall[]>(`https://restcountries.com/v3.1/region/${region}?fields=translations,cca3`);
  }

  public getCountryByCode(code: string): Observable<Pais[]> {

    if (!code) {
      return of([]);
    }

    return this.httpClient.get<Pais[]>(`https://restcountries.com/v3.1/alpha/${code}`);
  }

  public getCountryByCodeSmall(code: string): Observable<PaisesSmall> {

    if (!code) {
      return of();
    }

    return this.httpClient.get<PaisesSmall>(`https://restcountries.com/v3.1/alpha/${code}?fields=translations,cca3`);
  }

  public getCountriesByCodes(fronteras: string[]): Observable<PaisesSmall[]> {

    if (!fronteras) {
      return of([]);
    }

    const peticiones: Observable<PaisesSmall>[] = [];

    fronteras.forEach((frontera: string) => {
      const peticion = this.getCountryByCodeSmall(frontera);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }

}
