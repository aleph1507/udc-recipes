import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('ngOninit recipe details');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        console.log('!parammap has recipe');
        // redirect the user
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      console.log('loaded recipe');
      console.log(this.loadedRecipe);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure',
      message: 'Delete recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  ionViewWillEnter() {
    console.log('recipe details ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('recipe details ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('recipe details ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('recipe details ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('recipe details ngOnDestroy');
  }
}
