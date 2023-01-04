import { Injectable } from '@angular/core';

interface IFoodCard {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  public CurrentIndex = 0;

  public Bcards: IFoodCard[] = [];
  public Lcards: IFoodCard[] = [];
  public Hcards: IFoodCard[] = [];

  foodCardPush(id: string, cards: IFoodCard[]) {
    if (cards.length === 0) {
      cards.push({
        id,
        visible: true,
      });
    } else {
      cards.push({
        id,
        visible: false,
      });
    }
  }

  register(id: string, category: number) {
    switch (category) {
      case 0: // Brekfast
        this.foodCardPush(id, this.Bcards);

        break;

      case 1: // Lunch
        this.foodCardPush(id, this.Lcards);

        break;
      case 2: // High Tea
        this.foodCardPush(id, this.Hcards);

        break;
    }
  }

  // unregister(id: string) {
  //   this.cards = this.cards.filter((element) => element.id !== id);
  // }

  isCardOpen(id: string, category: number): boolean {
    if (category === 0) {
      // Brekfast
      return !!this.Bcards.find((element) => element.id === id)?.visible;
    } else if (category === 1) {
      // Lunch
      return !!this.Lcards.find((element) => element.id === id)?.visible;
    } else if (category === 2) {
      // High Tea
      return !!this.Hcards.find((element) => element.id === id)?.visible;
    }

    return false;
  }

  toggleFood(action: string, category: number, cards: IFoodCard[]) {
    const card = cards.find((element) => element.visible === true);

    if (card) {
      const currentCardIndex = cards.indexOf(card);
      card.visible = !card.visible;

      if (action == 'next') {
        const nextCard = cards[currentCardIndex + 1];
        nextCard.visible = !nextCard.visible;
        this.CurrentIndex = currentCardIndex + 1;
      }
      if (action === 'prev') {
        const prevCard = cards[currentCardIndex - 1];
        prevCard.visible = !prevCard.visible;
        this.CurrentIndex = currentCardIndex - 1;
      }
    }
  }
  toggleCard(action: string,category : number) {


    if (category === 0) {
      // Brekfast
      this.toggleFood(action,category,this.Bcards)
      
    } else if (category === 1) {
      // Lunch

      this.toggleFood(action,category,this.Lcards)

    } else if (category === 2) {
      // High Tea
      this.toggleFood(action,category,this.Hcards)
      
    }

    
  
}

}
