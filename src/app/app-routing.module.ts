import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const obsRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "obs/login" },
]

@NgModule({
  imports: [RouterModule.forRoot(obsRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
