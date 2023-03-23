//  ! Sample types

export type Id = string | number;

export type AgeCategory = 'adult' | 'child' | 'family';

export type ActivityState =
  | 'draft'
  | 'published'
  | 'cancelled'
  | 'confirmed'
  | 'finished';

export type Activity = {
  ageCategory: AgeCategory;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  state: ActivityState;
  title: string;
  userId: Id;
};
