import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type AdditionalIngredients = {
  __typename?: 'AdditionalIngredients';
  afterName: Scalars['String'];
  beforeName: Scalars['String'];
  id: Scalars['ID'];
  ingredient: Ingredient;
};

export type AlternateIngredients = {
  __typename?: 'AlternateIngredients';
  afterName: Scalars['String'];
  beforeName: Scalars['String'];
  id: Scalars['ID'];
  ingredient: Ingredient;
};

export type AmityAuthToken = {
  __typename?: 'AmityAuthToken';
  token: Scalars['String'];
};

export type AppstoreSubscriptionInput = {
  receipt: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  description?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ImagesSet>;
  profileUrl: Scalars['String'];
  type?: Maybe<AuthorType>;
};

/**
 * The author type indicates whether an author is a wp author (really a writer)
 * or a simple system user (for the case of shared mealplans, for instance)
 */
export enum AuthorType {
  User = 'USER',
  Writer = 'WRITER'
}

export type Authors = {
  __typename?: 'Authors';
  contributors: Array<Contributor>;
  main: Array<Author>;
};

export enum BioSex {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type BrazeSdkAuthToken = {
  __typename?: 'BrazeSDKAuthToken';
  token: Scalars['String'];
};

export enum Brightness {
  Dark = 'DARK',
  Darker = 'DARKER',
  Light = 'LIGHT',
  Lighter = 'LIGHTER',
  Unknown = 'UNKNOWN'
}

export enum BudgetLevel {
  Average = 'AVERAGE',
  Budget = 'BUDGET',
  Expensive = 'EXPENSIVE'
}

export type CancelStripeSubscriptionInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type CancelStripeSubscriptionResponse = {
  __typename?: 'CancelStripeSubscriptionResponse';
  z?: Maybe<Scalars['Boolean']>;
};

export enum CarbsStrictness {
  Liberal = 'LIBERAL',
  Moderate = 'MODERATE',
  Strict = 'STRICT',
  Unknown = 'UNKNOWN'
}

export enum CardStatus {
  CardStatusUnspecified = 'CARD_STATUS_UNSPECIFIED',
  Completed = 'COMPLETED',
  Skipped = 'SKIPPED'
}

export type ChangeDailyRoutineCardRecipeInput = {
  id: Scalars['ID'];
  recipeId: Scalars['String'];
};

export type ChangeDailyRoutineCardRecipeResponse = {
  __typename?: 'ChangeDailyRoutineCardRecipeResponse';
  card?: Maybe<DailyRoutineCard>;
};

export type CommunicationPrefsInput = {
  subscribeMemberEmails: Scalars['Boolean'];
  subscribeNewsletterEmails: Scalars['Boolean'];
};

export type CompleteDailyRoutineCardInput = {
  id: Scalars['ID'];
};

export type CompleteDailyRoutineCardResponse = {
  __typename?: 'CompleteDailyRoutineCardResponse';
  card?: Maybe<DailyRoutineCard>;
};

export type Contributor = {
  __typename?: 'Contributor';
  description?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ImagesSet>;
  profileUrl: Scalars['String'];
  role: Scalars['String'];
};

export type CookTime = {
  __typename?: 'CookTime';
  /** Active prepping time (minutes). */
  active: Scalars['Int'];
  /** The actual cook time for the recipe. */
  cook: Scalars['Int'];
  /** The time it takes to prepare for the recipe. */
  preparation: Scalars['Int'];
  /** Total cooking time (minutes). */
  total: Scalars['Int'];
};

export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  CountryCodeUnspecified = 'COUNTRY_CODE_UNSPECIFIED',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CreateDdProMemberInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  groupId: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  subscriptionTerm?: InputMaybe<DdProSubscriptionTerm>;
};

export type CreateDdProMemberWithGroupIdInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  groupId: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type CreateDataDeletionRequestInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type CreateStripeCheckoutSessionInput = {
  cancelUrl: Scalars['String'];
  priceId: Scalars['String'];
  successUrl: Scalars['String'];
};

export enum Cuisine {
  Asian = 'ASIAN',
  CuisineUnspecified = 'CUISINE_UNSPECIFIED',
  Indian = 'INDIAN',
  Italian = 'ITALIAN',
  Mediterranean = 'MEDITERRANEAN',
  Mexican = 'MEXICAN',
  MiddleEastern = 'MIDDLE_EASTERN'
}

export type DdProGroup = {
  __typename?: 'DDProGroup';
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  subscriptionPayer?: Maybe<DdProGroupSubscriptionPayer>;
  taxCountry?: Maybe<CountryCode>;
  title?: Maybe<Scalars['String']>;
};

export enum DdProGroupSubscriptionPayer {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  UnknownPayer = 'UNKNOWN_PAYER'
}

export type DdProMember = {
  __typename?: 'DDProMember';
  createTime: Scalars['Time'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupAdmin: Scalars['Boolean'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  status: DdProMemberStatus;
  subscriptionExpireTime?: Maybe<Scalars['Time']>;
  subscriptionStatus?: Maybe<MembershipSubscriptionStatus>;
  subscriptionTerm?: Maybe<DdProSubscriptionTerm>;
};

export enum DdProMemberStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN'
}

export enum DdProSubscriptionTerm {
  HalfYearFixed = 'HALF_YEAR_FIXED',
  NineMonthsFixed = 'NINE_MONTHS_FIXED',
  Recurring = 'RECURRING',
  ThreeMonthsFixed = 'THREE_MONTHS_FIXED',
  UnknownTerm = 'UNKNOWN_TERM',
  YearFixed = 'YEAR_FIXED'
}

export type DailyRoutine = {
  __typename?: 'DailyRoutine';
  days: Array<DailyRoutineDay>;
  id: Scalars['ID'];
};

export type DailyRoutineCard = {
  id: Scalars['ID'];
  status: CardStatus;
};

export type DailyRoutineCardAction = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardAction';
  cmsResourceId: Scalars['String'];
  id: Scalars['ID'];
  status: CardStatus;
};

export type DailyRoutineCardFood = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardFood';
  id: Scalars['ID'];
  recipe?: Maybe<Recipe>;
  status: CardStatus;
};

export type DailyRoutineCardReflection = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardReflection';
  cmsResourceId: Scalars['String'];
  id: Scalars['ID'];
  mood: DailyRoutineCardReflectionMood;
  qas: Array<DailyRoutineCardReflectionQa>;
  status: CardStatus;
};

export enum DailyRoutineCardReflectionMood {
  Happy = 'HAPPY',
  Neutral = 'NEUTRAL',
  ReflectionMoodUnspecified = 'REFLECTION_MOOD_UNSPECIFIED',
  Sad = 'SAD',
  VeryHappy = 'VERY_HAPPY'
}

export type DailyRoutineCardReflectionQa = {
  __typename?: 'DailyRoutineCardReflectionQA';
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type DailyRoutineCardReflectionQaInput = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type DailyRoutineCardStory = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardStory';
  cmsResourceId: Scalars['String'];
  id: Scalars['ID'];
  status: CardStatus;
};

export type DailyRoutineCardTip = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardTip';
  cmsResourceId: Scalars['String'];
  id: Scalars['ID'];
  status: CardStatus;
};

export type DailyRoutineCardVideo = DailyRoutineCard & {
  __typename?: 'DailyRoutineCardVideo';
  cmsResourceId: Scalars['String'];
  id: Scalars['ID'];
  status: CardStatus;
};

export type DailyRoutineDay = {
  __typename?: 'DailyRoutineDay';
  afternoon: DailyRoutineDayPartAfternoon;
  date: Scalars['String'];
  evening: DailyRoutineDayPartEvening;
  finished: Scalars['Boolean'];
  id: Scalars['ID'];
  morning: DailyRoutineDayPartMorning;
};

export type DailyRoutineDayPartAfternoon = {
  __typename?: 'DailyRoutineDayPartAfternoon';
  cards: Array<Maybe<DailyRoutineCard>>;
};

export type DailyRoutineDayPartEvening = {
  __typename?: 'DailyRoutineDayPartEvening';
  cards: Array<Maybe<DailyRoutineCard>>;
};

export type DailyRoutineDayPartMorning = {
  __typename?: 'DailyRoutineDayPartMorning';
  cards: Array<Maybe<DailyRoutineCard>>;
};

export type DataDeletionRequest = {
  __typename?: 'DataDeletionRequest';
  createTime: Scalars['String'];
};

export type Day = {
  __typename?: 'Day';
  breakfast: Meal;
  dinner: Meal;
  lunch: Meal;
  name: Scalars['String'];
  nutrition: Nutrition;
  servings: Scalars['Int'];
  strictness: RatingValuePair;
};

export type DayActive = {
  __typename?: 'DayActive';
  breakfast: MealActive;
  dinner: MealActive;
  lunch: MealActive;
  name: Scalars['String'];
  nutrition: Nutrition;
  strictness: RatingValuePair;
};

export type DeleteDdProMemberInput = {
  id: Scalars['ID'];
};

export type DeleteMealplanRecipe = {
  day: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  meal: MealType;
};

export enum Diet {
  DietUnspecified = 'DIET_UNSPECIFIED',
  Vegan = 'VEGAN',
  Vegetarian = 'VEGETARIAN'
}

export enum DietChallenge {
  BadFood = 'BAD_FOOD',
  Cravings = 'CRAVINGS',
  DietChallengeUnspecified = 'DIET_CHALLENGE_UNSPECIFIED',
  Hunger = 'HUNGER',
  LimitedOptions = 'LIMITED_OPTIONS',
  NoInterestInDiet = 'NO_INTEREST_IN_DIET'
}

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Dish {
  Casserole = 'CASSEROLE',
  DishUnspecified = 'DISH_UNSPECIFIED',
  Grill = 'GRILL',
  Omelet = 'OMELET',
  Pizza = 'PIZZA',
  Salad = 'SALAD',
  Soup = 'SOUP',
  Stew = 'STEW',
  StirFry = 'STIR_FRY'
}

/** The kinds/types of top-level domain objects we can query on */
export enum DomainKind {
  Mealplan = 'MEALPLAN',
  Recipe = 'RECIPE'
}

export type DualValue = {
  __typename?: 'DualValue';
  unit: Scalars['String'];
  value: Scalars['String'];
};

export type FavoriteMealplansInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FavoriteMealplansResponse = {
  __typename?: 'FavoriteMealplansResponse';
  /** A list of mealplans. */
  mealplans: Array<Maybe<Mealplan>>;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total count of recipes in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export type FavoriteRecipesInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FavoriteRecipesResponse = {
  __typename?: 'FavoriteRecipesResponse';
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** A list of recipes. */
  recipes: Array<Maybe<Recipe>>;
  /** The total count of recipes in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export enum FoodType {
  Beef = 'BEEF',
  Dairy = 'DAIRY',
  Eggs = 'EGGS',
  Fish = 'FISH',
  FoodTypeUnspecified = 'FOOD_TYPE_UNSPECIFIED',
  Lamb = 'LAMB',
  Nuts = 'NUTS',
  Pork = 'PORK',
  Poultry = 'POULTRY',
  Shellfish = 'SHELLFISH'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type GeneratedMealplanData = {
  __typename?: 'GeneratedMealplanData';
  description?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  /** the return the schedule is optional; but a selector inside the array is mandatory in case you want it */
  schedule?: Maybe<Array<GeneratedMealplanDay>>;
  slug: Scalars['String'];
  startTime?: Maybe<Scalars['String']>;
};

/** all of the fields are optional */
export type GeneratedMealplanDay = {
  __typename?: 'GeneratedMealplanDay';
  breakfast?: Maybe<Array<Maybe<MealplanRecipeSample>>>;
  dinner?: Maybe<Array<Maybe<MealplanRecipeSample>>>;
  lunch?: Maybe<Array<Maybe<MealplanRecipeSample>>>;
  name?: Maybe<Scalars['String']>;
};

export type GetAmityAuthTokenInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetBrazeSdkAuthTokenInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetDdProGroupsInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetDdProMembersInput = {
  groupId: Scalars['ID'];
};

export type GetDailyRoutineInput = {
  empty?: InputMaybe<Scalars['String']>;
};

export type GetDailyRoutineResponse = {
  __typename?: 'GetDailyRoutineResponse';
  dailyRoutine?: Maybe<DailyRoutine>;
};

export type GetDataDeletionRequestInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetRecommendedMealplansInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetRecommendedMealplansResponse = {
  __typename?: 'GetRecommendedMealplansResponse';
  /** A list of recommended mealplans. */
  mealplans: Array<Maybe<Mealplan>>;
};

export type GetRecommendedRecipesInput = {
  z?: InputMaybe<Scalars['Boolean']>;
};

export type GetRecommendedRecipesResponse = {
  __typename?: 'GetRecommendedRecipesResponse';
  categories: Array<Maybe<RecommendedRecipesCategory>>;
  recipes: Array<Maybe<Recipe>>;
};

export type GoogleplaySubscriptionInput = {
  receipt: Scalars['String'];
};

export type HeaderFooter = {
  __typename?: 'HeaderFooter';
  text: Scalars['String'];
};

export enum HealthCondition {
  HealthConditionUnspecified = 'HEALTH_CONDITION_UNSPECIFIED',
  HighBloodPressure = 'HIGH_BLOOD_PRESSURE',
  Type1Diabetes = 'TYPE1_DIABETES',
  Type2Diabetes = 'TYPE2_DIABETES'
}

export type HealthConditions = {
  __typename?: 'HealthConditions';
  diabetesType1: Scalars['Boolean'];
  diabetesType2: Scalars['Boolean'];
  highBloodPressure: Scalars['Boolean'];
};

export type HealthConditionsInput = {
  diabetesType1: Scalars['Boolean'];
  diabetesType2: Scalars['Boolean'];
  highBloodPressure: Scalars['Boolean'];
};

export type ImageData = {
  __typename?: 'ImageData';
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImagesSet = {
  __typename?: 'ImagesSet';
  /** Brightness description of the image. */
  brightness: Brightness;
  /**
   * The default image for the recipe
   * @deprecated use defaultImage path's instead
   */
  default: Scalars['String'];
  /**
   * The image path with their respective width + weight
   * useful so clients can resize images respecting aspect ratio
   */
  defaultImage?: Maybe<ImageData>;
  /**
   * The hz image for the recipe
   * @deprecated use hzImage path's instead
   */
  hz: Scalars['String'];
  hzImage?: Maybe<ImageData>;
  /**
   * The vt image for the recipe
   * @deprecated use vtImage path's instead
   */
  vt: Scalars['String'];
  vtImage?: Maybe<ImageData>;
};

/** A dietdoctor recipe */
export type Ingredient = {
  __typename?: 'Ingredient';
  createdAt: Scalars['Time'];
  /** A unique identifier. */
  id: Scalars['ID'];
  information?: Maybe<Scalars['String']>;
  modifiedAt: Scalars['Time'];
  shoppingSection: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  titles: Titles;
};

export type IngredientSection = {
  __typename?: 'IngredientSection';
  footer: HeaderFooter;
  header: HeaderFooter;
  ingredients: Array<RecipeIngredient>;
  title: Scalars['String'];
};

export type IngredientValue = {
  __typename?: 'IngredientValue';
  dualValue: DualValue;
  optionalValues: Array<IngredientValue>;
  servingSize: Scalars['Int'];
  unit: Scalars['String'];
  value: Scalars['String'];
};

export type IngredientValues = {
  __typename?: 'IngredientValues';
  metric: Array<IngredientValue>;
  sv: Array<IngredientValue>;
  us: Array<IngredientValue>;
};

export type InsertMealplanRecipe = {
  day: Scalars['String'];
  id: Scalars['ID'];
  meal: MealType;
  recipe: Scalars['String'];
  servings: Scalars['Int'];
};

export type InstructionSection = {
  __typename?: 'InstructionSection';
  footer: HeaderFooter;
  header: HeaderFooter;
  steps: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ItemWithServings = {
  id: Scalars['String'];
  servings: Scalars['Int'];
};

export type JoinDdProGroupInput = {
  firstName: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  signedURL: Scalars['String'];
  taxResidence?: InputMaybe<Scalars['String']>;
};

export type JoinDdProGroupResponse = {
  __typename?: 'JoinDDProGroupResponse';
  user: User;
};

/**
 * A LengthUnit refers to a discrete, pre-established length or distance having a constant magnitude
 * which is used as a reference or convention to express linear dimension.
 */
export enum LengthUnit {
  /** A centimeter is a unit of length in the metric system, equal to 1/100 of a meter. */
  Centimeter = 'CENTIMETER',
  /** A foot is a unit of length in the imperial system equal to 1/3 of a yard. */
  Foot = 'FOOT',
  /** An inch is a unit of length in the imperial system equal to 1/36 of a yard. */
  Inch = 'INCH',
  /** A kilometer is a unit of length in the metric system, equal to 1000 meters. */
  Kilometer = 'KILOMETER',
  /** A meter is defined as the length of the path traveled by light in a vacuum in 1/299792458 seconds. */
  Meter = 'METER',
  /** A mile is a unit of length of linear measure in the imperial system equal to 1760 yards. */
  Mile = 'MILE',
  /** A millimeter is a unit of length in the metric system, equal to 1/1000 of a meter. */
  Millimeter = 'MILLIMETER',
  /** A yard is a unit of length in the imperial system equal to exactly 0.9144 meters. */
  Yard = 'YARD'
}

export type ListIngredientsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  tagFilters?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListIngredientsResponse = {
  __typename?: 'ListIngredientsResponse';
  /** A list of ingredients. */
  ingredients: Array<Maybe<Ingredient>>;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total count of ingredients in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export type ListMealplansInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  /** Free text search query */
  query?: InputMaybe<Scalars['String']>;
  tagFilters?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListMealplansResponse = {
  __typename?: 'ListMealplansResponse';
  /** A list of mealplans. */
  mealplans: Array<Maybe<MealplanContent>>;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total count of recipes in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export type ListMemberMealplansInput = {
  orderBy?: InputMaybe<Array<Order>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  tagFilters?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListMemberMealplansResponse = {
  __typename?: 'ListMemberMealplansResponse';
  /** A list of mealplans. */
  mealplans: Array<Maybe<Mealplan>>;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** The total count of mealplans in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export type ListRecipesById = {
  ids: Array<Scalars['String']>;
};

export type ListRecipesInput = {
  /** The allowed budget values for the recipes (average, budget, etc) */
  budgets?: InputMaybe<Array<BudgetLevel>>;
  /** Max time in total the recipe should take in minutes */
  cookTimeLimitMinutes?: InputMaybe<Scalars['Int']>;
  /** The allowed difficulties ratings for the recipe (easy, medium, etc) */
  difficulties?: InputMaybe<Array<RecipeDifficulty>>;
  /** Include previews of premium recipes for non-premium callers. */
  includePremiumPreview?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<Order>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  /** List only premium recipes. */
  premiumOnly?: InputMaybe<Scalars['Boolean']>;
  /** Free text search query */
  query?: InputMaybe<Scalars['String']>;
  tagFilters?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListRecipesResponse = {
  __typename?: 'ListRecipesResponse';
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** A list of recipes. */
  recipes: Array<Maybe<Recipe>>;
  /** The total count of recipes in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

export type ListTagsInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ListTagsResponse = {
  __typename?: 'ListTagsResponse';
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPage?: Maybe<Scalars['Int']>;
  /** A list of tags. */
  tags: Array<Maybe<Tag>>;
  /** The total count of tags in the list irrespective of pagination. */
  totalSize: Scalars['Int'];
};

/** A MassUnit is a measure of a physical body. */
export enum MassUnit {
  /** A gram is a unit of mass in the metric system equal to 1/1000 of a kilogram. */
  Gram = 'GRAM',
  /** A kilogram is the base unit of mass in the metric system. */
  Kilogram = 'KILOGRAM',
  /** A metric ton is unit of mass in the metric system equal to 1000 kilograms. */
  MetricTon = 'METRIC_TON',
  /** A pound is a unit of mass in the imperial system equal to 0.43559237 kilograms. */
  Pound = 'POUND'
}

export type MeCapabilities = {
  __typename?: 'MeCapabilities';
  canEditMealPlans: Scalars['Boolean'];
};

export type MeResponse = {
  __typename?: 'MeResponse';
  capabilities: MeCapabilities;
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  stripeCustomerId?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

/** A mealplan's meals */
export type Meal = {
  __typename?: 'Meal';
  /** IDs for recipes included in the meal. */
  active?: Maybe<Scalars['Boolean']>;
  recipeWithServings: Array<Maybe<RecipeWithServings>>;
  /** @deprecated Use `recipesDetails`. */
  recipes: Array<Scalars['ID']>;
  recipesDetails: Array<Maybe<Recipe>>;
};

export type MealActive = {
  __typename?: 'MealActive';
  /** If the meal is active in the mealplan. (Note: Only set for `userMealplans()` query) */
  active?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents the origin of a mealplan,
 * meaning how it appeared in this world
 * (was it created by the user via the UI,
 * generated via personalization or copied)
 */
export enum MealPlanOrigin {
  Copied = 'COPIED',
  Created = 'CREATED',
  Generated = 'GENERATED'
}

export enum MealType {
  Breakfast = 'BREAKFAST',
  Dinner = 'DINNER',
  Lunch = 'LUNCH'
}

/** A dietdoctor mealplan */
export type Mealplan = {
  __typename?: 'Mealplan';
  authors: Authors;
  /** The RFC3339 date format of when the recipe was created */
  createdAt: Scalars['Time'];
  /** The desciption of the recipe. */
  description: Scalars['String'];
  /** The (dirty) description containing some allowed htmls fields coming from wordpress. */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** A unique identifier */
  id: Scalars['ID'];
  /** Images for the mealplan (i.e thumb image) */
  images?: Maybe<ImagesSet>;
  /** Points if this is the active mealplan or not */
  isActivePlan?: Maybe<Scalars['Boolean']>;
  /** Indicates wether this mealplan is high protein or not */
  isHighProtein: Scalars['Boolean'];
  /** If recipe is for members only. */
  isMembersOnly: Scalars['Boolean'];
  /** If mealplan is shared. */
  isShared?: Maybe<Scalars['Boolean']>;
  /** The RFC3339 date format of when the recipe was updated */
  modifiedAt: Scalars['Time'];
  /** The nutritional averages of the recipe. */
  nutritionAverage: Nutrition;
  /** The origin of a said mealplan */
  origin?: Maybe<MealPlanOrigin>;
  /**
   * The schedule of the mealplan.
   * OBS: Changed from having day names as keys in WP to being inserted as `name` in the array here.
   */
  schedule: Array<Maybe<Day>>;
  /** The serving sizes for the entirety of this mealplan */
  servings: Scalars['Int'];
  /** The combined shopping list of ingredients for all meals */
  shoppingList: Array<ShoppingIngredient>;
  slug: Scalars['String'];
  /**
   * The original source ID of the mealplan (if it was copied)
   * @deprecated use sourceMealplan with a subselection instead
   */
  sourceID: Scalars['ID'];
  sourceMealplan?: Maybe<Mealplan>;
  /**
   * The original source slug of the mealplan (if it was copied)
   * @deprecated use sourceMealplan with a subselection instead
   */
  sourceSlug?: Maybe<Scalars['String']>;
  /** The rating of the recipe. */
  strictness: RatingValuePair;
  /** The tags of the recipe */
  tags: Array<Tag>;
  /** The title of the recipe */
  title: Scalars['String'];
  /** The type of recipe. */
  type: Scalars['String'];
  /**
   * The user ID of the author of this mealplan (if user-created).
   * @deprecated use authors where type is USER instead
   */
  userAuthor: Scalars['ID'];
};

/** A dietdoctor mealplan with active status */
export type MealplanActive = {
  __typename?: 'MealplanActive';
  /** A unique identifier */
  id: Scalars['ID'];
  /** The nutritional averages of the recipe. */
  nutritionAverage: Nutrition;
  /**
   * The schedule of the mealplan.
   * OBS: Changed from having day names as keys in WP to being inserted as `name` in the array here.
   */
  schedule: Array<Maybe<DayActive>>;
  /** The combined shopping list of ingredients for all meals */
  shoppingList: Array<ShoppingIngredient>;
  /** The rating of the recipe. */
  strictness: RatingValuePair;
  /** The tags of the recipe */
  tags: Array<Tag>;
};

/**
 * MealplanContent is the return of mealplan listings.
 * The content is resolved through some service if needed;
 * the ID comes from some search engine and needs no auth.
 */
export type MealplanContent = {
  __typename?: 'MealplanContent';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<ImagesSet>;
  isHighProtein: Scalars['Boolean'];
  nutrition: Nutrition;
  slug: Scalars['String'];
  strictness: RatingValuePair;
  title: Scalars['String'];
};

export type MealplanCopyInput = {
  description?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<Array<MealplanDayInput>>;
  title?: InputMaybe<Scalars['String']>;
};

export type MealplanDayInput = {
  breakfast?: InputMaybe<MealplanMealInput>;
  dinner?: InputMaybe<MealplanMealInput>;
  lunch?: InputMaybe<MealplanMealInput>;
  name: Scalars['String'];
  servings?: InputMaybe<Scalars['Int']>;
};

/** The input object for mutating mealplans */
export type MealplanInput = {
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<MealPlanOrigin>;
  schedule?: InputMaybe<Array<MealplanDayInput>>;
  servings?: InputMaybe<Scalars['Int']>;
  shared?: InputMaybe<Scalars['Boolean']>;
  startTime?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MealplanMealInput = {
  active?: Scalars['Boolean'];
  mealplanRecipe?: InputMaybe<Array<MealplanRecipeInput>>;
  recipes: Array<Scalars['ID']>;
};

/**
 * All of this are simply inputs for the meal plan that will be generated
 * They are, as of version one, derived from a questionnaire. There is a
 * strict map with the MPG service for all of the fields -- the name
 * is the unique ID of the entity that represents those values
 */
export type MealplanPreferences = {
  __typename?: 'MealplanPreferences';
  activityLevel?: Maybe<Ranking>;
  age?: Maybe<Scalars['Int']>;
  budget?: Maybe<Ranking>;
  cookingInterest?: Maybe<Ranking>;
  exclusions?: Maybe<Array<Scalars['String']>>;
  frequency?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  healthConditions?: Maybe<HealthConditions>;
  height?: Maybe<Ranking>;
  leftover?: Maybe<Scalars['Boolean']>;
  name: Scalars['ID'];
  proteinLevel?: Maybe<ProteinLevel>;
  strictness?: Maybe<CarbsStrictness>;
  weightLossGoal?: Maybe<WeightLossGoal>;
};

export type MealplanPreferencesInput = {
  activityLevel: Ranking;
  age: Scalars['Int'];
  budget: Ranking;
  cookingInterest: Ranking;
  exclusions?: InputMaybe<Array<Scalars['String']>>;
  frequency: Scalars['String'];
  gender: Gender;
  healthConditions: HealthConditionsInput;
  height: Ranking;
  leftover: Scalars['Boolean'];
  proteinLevel?: InputMaybe<ProteinLevel>;
  raw?: InputMaybe<Scalars['String']>;
  strictness: CarbsStrictness;
  weightLossGoal: WeightLossGoal;
};

/** The entity used to create a mealplan recipe with sevings for that particular recipe. */
export type MealplanRecipeInput = {
  recipe: Scalars['ID'];
  /** Default servings for a recipe in a mealplan is one */
  servings?: Scalars['Int'];
};

export type MealplanRecipeSample = {
  __typename?: 'MealplanRecipeSample';
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<ImagesSet>;
  title?: Maybe<Scalars['String']>;
};

export type MealplanRecipeSuggestionInput = {
  excluded?: InputMaybe<Array<Scalars['ID']>>;
  meal: MealType;
  mealplanId: Scalars['ID'];
};

export type MealplanRecipeSuggestionResponse = {
  __typename?: 'MealplanRecipeSuggestionResponse';
  suggestion?: Maybe<Recipe>;
};

export type MealplanWithActive = {
  __typename?: 'MealplanWithActive';
  active: MealplanActive;
  mealplan: Mealplan;
};

export enum MeasurementSystem {
  Imperial = 'IMPERIAL',
  MeasurementSystemUnspecified = 'MEASUREMENT_SYSTEM_UNSPECIFIED',
  Metric = 'METRIC'
}

export type MembershipSubscription = {
  __typename?: 'MembershipSubscription';
  expireTime?: Maybe<Scalars['Time']>;
  plan: MembershipSubscriptionPlan;
  provider: MembershipSubscriptionProvider;
  status: MembershipSubscriptionStatus;
  stripeProviderData?: Maybe<StripeProviderData>;
};

export enum MembershipSubscriptionPlan {
  Lifetime = 'LIFETIME',
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

export enum MembershipSubscriptionProvider {
  Appstore = 'APPSTORE',
  Braintree = 'BRAINTREE',
  Generic = 'GENERIC',
  GooglePlay = 'GOOGLE_PLAY',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
  Unknown = 'UNKNOWN'
}

export enum MembershipSubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Invalid = 'INVALID',
  New = 'NEW',
  Unknown = 'UNKNOWN'
}

export type MergeIngredientsInput = {
  recipes?: InputMaybe<Array<ItemWithServings>>;
};

export type MergeIngredientsResponse = {
  __typename?: 'MergeIngredientsResponse';
  ingredients: Array<MergedIngredient>;
};

export type MergedIngredient = {
  __typename?: 'MergedIngredient';
  ingredient: Ingredient;
  values: MergedIngredientValues;
};

/** Ingredient values are usually keyed by the number of servings. */
export type MergedIngredientValues = {
  __typename?: 'MergedIngredientValues';
  metric?: Maybe<DualValue>;
  sv?: Maybe<DualValue>;
  us?: Maybe<DualValue>;
};

/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type Mutation = {
  __typename?: 'Mutation';
  activateMealplan?: Maybe<Mealplan>;
  cancelStripeSubscription?: Maybe<CancelStripeSubscriptionResponse>;
  changeDailyRoutineCardRecipe: ChangeDailyRoutineCardRecipeResponse;
  completeDailyRoutineCard: CompleteDailyRoutineCardResponse;
  copyMealplan: Mealplan;
  createAppstoreSubscription?: Maybe<MembershipSubscription>;
  /** DD Pro mutations. */
  createDDProMember?: Maybe<DdProMember>;
  createDDProMemberWithGroupId?: Maybe<DdProMember>;
  createDataDeletionRequest?: Maybe<DataDeletionRequest>;
  createGoogleplaySubscription?: Maybe<MembershipSubscription>;
  createMealplan: Mealplan;
  createPayPalSubscription?: Maybe<MembershipSubscription>;
  createPreferences?: Maybe<MealplanPreferences>;
  createStripeCheckoutSession: StripeCheckoutSession;
  createStripeSubscription?: Maybe<MembershipSubscription>;
  /**
   * returns "OK"
   * updateMealplan(id: ID!, mealplan: MealplanInput!): Mealplan!
   */
  createUser: User;
  deactivateMealplan?: Maybe<Mealplan>;
  deleteDDProMember?: Maybe<Scalars['Boolean']>;
  deleteMealplan: Scalars['String'];
  deleteMealplanPreferences: Scalars['String'];
  generateMealplan?: Maybe<GeneratedMealplanData>;
  generateNextMealplan?: Maybe<GeneratedMealplanData>;
  joinDDProGroup: JoinDdProGroupResponse;
  rate?: Maybe<RatingDistribution>;
  reflectDailyRoutineCard: ReflectDailyRoutineCardResponse;
  /** returns "OK" from WP */
  setFavorite: Scalars['String'];
  skipDailyRoutineCard: SkipDailyRoutineCardResponse;
  startDailyRoutineDay: StartDailyRoutineDayResponse;
  /** Mealplan specific mutations */
  updateMealplan: MealplanWithActive;
  updateMealplanAddRecipe: Mealplan;
  updateMealplanDayServings: Mealplan;
  updateMealplanRecipeServings: Mealplan;
  updateMealplanRemoveRecipe: Mealplan;
  updateMealplanReplaceRecipe: Mealplan;
  updateMealplanServings: Mealplan;
  updatePreferences?: Maybe<MealplanPreferences>;
  updateStripePaymentMethod?: Maybe<UpdateStripePaymentMethodResponse>;
  updateUser: User;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationActivateMealplanArgs = {
  id: Scalars['ID'];
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCancelStripeSubscriptionArgs = {
  input: CancelStripeSubscriptionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationChangeDailyRoutineCardRecipeArgs = {
  input: ChangeDailyRoutineCardRecipeInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCompleteDailyRoutineCardArgs = {
  input: CompleteDailyRoutineCardInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCopyMealplanArgs = {
  mealplan: MealplanCopyInput;
  sourceID: Scalars['ID'];
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateAppstoreSubscriptionArgs = {
  input: AppstoreSubscriptionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateDdProMemberArgs = {
  input: CreateDdProMemberInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateDdProMemberWithGroupIdArgs = {
  input: CreateDdProMemberWithGroupIdInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateDataDeletionRequestArgs = {
  input: CreateDataDeletionRequestInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateGoogleplaySubscriptionArgs = {
  input: GoogleplaySubscriptionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateMealplanArgs = {
  mealplan: MealplanInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreatePayPalSubscriptionArgs = {
  input: PayPalSubscriptionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreatePreferencesArgs = {
  input: MealplanPreferencesInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateStripeCheckoutSessionArgs = {
  input: CreateStripeCheckoutSessionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateStripeSubscriptionArgs = {
  input: StripeSubscriptionInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationCreateUserArgs = {
  user: UserInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationDeleteDdProMemberArgs = {
  input: DeleteDdProMemberInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationDeleteMealplanArgs = {
  id: Scalars['ID'];
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationGenerateMealplanArgs = {
  input: MealplanPreferencesInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationJoinDdProGroupArgs = {
  input: JoinDdProGroupInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationRateArgs = {
  input?: InputMaybe<RatingInput>;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationReflectDailyRoutineCardArgs = {
  input: ReflectDailyRoutineCardInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationSetFavoriteArgs = {
  favorite: Scalars['Boolean'];
  id: Scalars['ID'];
  kind: DomainKind;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationSkipDailyRoutineCardArgs = {
  input: SkipDailyRoutineCardInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationStartDailyRoutineDayArgs = {
  input: StartDailyRoutineDayInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanArgs = {
  id: Scalars['ID'];
  mealplan: MealplanInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanAddRecipeArgs = {
  input: InsertMealplanRecipe;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanDayServingsArgs = {
  input: UpdateMealplanDayServings;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanRecipeServingsArgs = {
  input: UpdateMealplanRecipeServings;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanRemoveRecipeArgs = {
  input: DeleteMealplanRecipe;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanReplaceRecipeArgs = {
  input: ReplaceMealplanRecipe;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateMealplanServingsArgs = {
  input: UpdateMealplanServings;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdatePreferencesArgs = {
  input: MealplanPreferencesInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateStripePaymentMethodArgs = {
  input: UpdateStripePaymentMethodInput;
};


/**
 * Mutation defines all mutating functions.
 * https://graphql.org/graphql-js/mutations-and-input-types/
 */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** Describes the nutritional contents for a mealplan */
export type Nutrition = {
  __typename?: 'Nutrition';
  /** The nutritional percentages */
  percentages: NutritionPercentages;
  /** The nutritional values */
  values: NutritionValues;
};

/** Describes the nutritional percentages */
export type NutritionPercentages = {
  __typename?: 'NutritionPercentages';
  carbs: Scalars['Float'];
  fat: Scalars['Float'];
  protein: Scalars['Float'];
};

/** Describes the nutritional values */
export type NutritionValues = {
  __typename?: 'NutritionValues';
  /** The calories */
  calories: Scalars['Float'];
  /** The carbs */
  carbs: Scalars['Float'];
  /** The fat */
  fat: Scalars['Float'];
  fiber?: Maybe<Scalars['Float']>;
  /** The protein */
  protein: Scalars['Float'];
  /** The total amount of carbs */
  totalCarbs: Scalars['Float'];
};

export type Order = {
  /** Default order is descending. */
  direction?: InputMaybe<Direction>;
  /** Sortable by fields: "date", "modified", "name", "title", "type". */
  field: Scalars['String'];
};

export type PayPalSubscriptionInput = {
  subscriptionId: Scalars['ID'];
};

export enum ProteinLevel {
  AdequateProtein = 'ADEQUATE_PROTEIN',
  HighProtein = 'HIGH_PROTEIN',
  UnknownProtein = 'UNKNOWN_PROTEIN'
}

/** The Query type represents all of the entry points into the API. */
export type Query = {
  __typename?: 'Query';
  activeMealplan?: Maybe<Mealplan>;
  combinedShoppingList?: Maybe<Array<ShoppingIngredient>>;
  favoriteMealplans: FavoriteMealplansResponse;
  /** LATER: lower the default perPage to 5 later when the app implements paging */
  favoriteRecipes: FavoriteRecipesResponse;
  /** Get array of favorites for a specific kind of object */
  favorites: Array<Scalars['ID']>;
  freeMealplans?: Maybe<Array<Mealplan>>;
  getAmityAuthToken: AmityAuthToken;
  getBrazeSDKAuthToken: BrazeSdkAuthToken;
  getDDProGroups: Array<Maybe<DdProGroup>>;
  getDDProMembers: Array<Maybe<DdProMember>>;
  getDailyRoutine: GetDailyRoutineResponse;
  getDataDeletionRequest?: Maybe<DataDeletionRequest>;
  getRecommendedMealplans: GetRecommendedMealplansResponse;
  getRecommendedRecipes: GetRecommendedRecipesResponse;
  getUser: User;
  ingredients?: Maybe<Array<Ingredient>>;
  listIngredients: ListIngredientsResponse;
  listMealplans: ListMealplansResponse;
  listMemberMealplans: ListMemberMealplansResponse;
  listRecipes: ListRecipesResponse;
  listRecipesById: Array<Maybe<Recipe>>;
  listTags: ListTagsResponse;
  me: MeResponse;
  mealPlanPreferences?: Maybe<MealplanPreferences>;
  mealplan: Mealplan;
  mealplanBySlug: Mealplan;
  mealplanRecipeSuggestion: MealplanRecipeSuggestionResponse;
  mealplansActiveStatus?: Maybe<Array<MealplanActive>>;
  memberMealplans?: Maybe<Array<Mealplan>>;
  membershipSubscription?: Maybe<MembershipSubscription>;
  mergeIngredients?: Maybe<MergeIngredientsResponse>;
  ratingDistribution: RatingDistribution;
  recipe: Recipe;
  recipeBySlug: Recipe;
  recipeSuggestions: Array<Maybe<Recipe>>;
  recipes?: Maybe<Array<Recipe>>;
  searchFilterTags: SearchFilterTagsResponse;
  stripeCustomerPortal: StripeCustomerPortalResponse;
  suggestRecipesQuery: SuggestRecipesQueryResponse;
  tags?: Maybe<Array<Tag>>;
  userMealplans?: Maybe<Array<Mealplan>>;
  verifyDDProMemberJoinURL: VerifyDdProMemberJoinUrlResponse;
};


/** The Query type represents all of the entry points into the API. */
export type QueryCombinedShoppingListArgs = {
  recipes: Array<Scalars['ID']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryFavoriteMealplansArgs = {
  input?: InputMaybe<FavoriteMealplansInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryFavoriteRecipesArgs = {
  input?: InputMaybe<FavoriteRecipesInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryFavoritesArgs = {
  kind: DomainKind;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryFreeMealplansArgs = {
  modifiedAfter?: InputMaybe<Scalars['Time']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetAmityAuthTokenArgs = {
  input: GetAmityAuthTokenInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetBrazeSdkAuthTokenArgs = {
  input: GetBrazeSdkAuthTokenInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetDdProGroupsArgs = {
  input: GetDdProGroupsInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetDdProMembersArgs = {
  input: GetDdProMembersInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetDailyRoutineArgs = {
  input: GetDailyRoutineInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetDataDeletionRequestArgs = {
  input: GetDataDeletionRequestInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetRecommendedMealplansArgs = {
  input: GetRecommendedMealplansInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryGetRecommendedRecipesArgs = {
  input: GetRecommendedRecipesInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryIngredientsArgs = {
  modifiedAfter?: InputMaybe<Scalars['Time']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListIngredientsArgs = {
  input?: InputMaybe<ListIngredientsInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListMealplansArgs = {
  input?: InputMaybe<ListMealplansInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListMemberMealplansArgs = {
  input?: InputMaybe<ListMemberMealplansInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListRecipesArgs = {
  input?: InputMaybe<ListRecipesInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListRecipesByIdArgs = {
  input: ListRecipesById;
};


/** The Query type represents all of the entry points into the API. */
export type QueryListTagsArgs = {
  input?: InputMaybe<ListTagsInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryMealplanArgs = {
  id: Scalars['ID'];
};


/** The Query type represents all of the entry points into the API. */
export type QueryMealplanBySlugArgs = {
  slug: Scalars['String'];
};


/** The Query type represents all of the entry points into the API. */
export type QueryMealplanRecipeSuggestionArgs = {
  input: MealplanRecipeSuggestionInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryMealplansActiveStatusArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryMemberMealplansArgs = {
  modifiedAfter?: InputMaybe<Scalars['Time']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryMergeIngredientsArgs = {
  input?: InputMaybe<MergeIngredientsInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryRatingDistributionArgs = {
  input?: InputMaybe<RatingDistributionInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryRecipeArgs = {
  id: Scalars['ID'];
};


/** The Query type represents all of the entry points into the API. */
export type QueryRecipeBySlugArgs = {
  slug: Scalars['String'];
};


/** The Query type represents all of the entry points into the API. */
export type QueryRecipeSuggestionsArgs = {
  input: RecipeSuggestionsInput;
};


/** The Query type represents all of the entry points into the API. */
export type QueryRecipesArgs = {
  modifiedAfter?: InputMaybe<Scalars['Time']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QuerySearchFilterTagsArgs = {
  input?: InputMaybe<SearchFilterTagsInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryStripeCustomerPortalArgs = {
  returnURL?: InputMaybe<Scalars['String']>;
};


/** The Query type represents all of the entry points into the API. */
export type QuerySuggestRecipesQueryArgs = {
  input?: InputMaybe<SuggestRecipesQueryInput>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryTagsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryUserMealplansArgs = {
  modifiedAfter?: InputMaybe<Scalars['Time']>;
  orderBy?: InputMaybe<Array<Order>>;
  origin?: InputMaybe<MealPlanOrigin>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** The Query type represents all of the entry points into the API. */
export type QueryVerifyDdProMemberJoinUrlArgs = {
  input: VerifyDdProMemberJoinUrlInput;
};

export enum Ranking {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type RatingDistribution = {
  __typename?: 'RatingDistribution';
  average?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  item?: Maybe<Scalars['String']>;
  stars?: Maybe<Stars>;
  userRating?: Maybe<Scalars['Int']>;
};

export type RatingDistributionInput = {
  item: Scalars['String'];
};

export type RatingInput = {
  item: Scalars['String'];
  rating: Scalars['Int'];
};

export type RatingValuePair = {
  __typename?: 'RatingValuePair';
  rating: Scalars['String'];
  value: Scalars['Int'];
};

/** A dietdoctor recipe */
export type Recipe = {
  __typename?: 'Recipe';
  authors: Authors;
  /** What is the budget of a recipe */
  budget?: Maybe<RatingValuePair>;
  /** The RFC3339 date format of when the recipe was created. */
  createdAt: Scalars['Time'];
  /** The desctiption of the recipe. */
  description: Scalars['String'];
  /** The desctiption of the recipe, with a subset of allowed HTML tags. */
  descriptionHtml: Scalars['String'];
  /** How difficult it is to prepare the recipe. */
  difficulty: RatingValuePair;
  /** A unique identifier. */
  id: Scalars['ID'];
  /** The different uris for recipe images. */
  images: ImagesSet;
  /** The ingredients to prepare the recipe. */
  ingredientSections: Array<IngredientSection>;
  /** The instructions to prepare the recipe. */
  instructionSections: Array<InstructionSection>;
  isHighProtein: Scalars['Boolean'];
  /** If the recipe can be added to a mealplan. */
  isMealplanReady: Scalars['Boolean'];
  isMembersOnly?: Maybe<Scalars['Boolean']>;
  /** The RFC3339 date format of when the recipe was updated */
  modifiedAt: Scalars['Time'];
  /** The nutritional value of the recipe. */
  nutrition: Nutrition;
  /** The rating of the recipe. */
  rating: Scalars['Float'];
  satietyScore?: Maybe<Scalars['Float']>;
  /** The serving sizes available for the recipe. */
  servings: Servings;
  /** The shopping list of ingredients. */
  shoppingList: Array<ShoppingIngredient>;
  slug: Scalars['String'];
  /** How strict the recipe is. */
  strictness: RatingValuePair;
  tags: Array<Tag>;
  /** Test kitchen struct. */
  testKitchen: TestKitchen;
  /** The cook time for the recipe. */
  time: CookTime;
  tips: Array<RecipeTips>;
  /** The title of the recipe. */
  title: Scalars['String'];
  videos?: Maybe<Array<Maybe<RecipeVideo>>>;
};

export enum RecipeDifficulty {
  Beginner = 'BEGINNER',
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  additionalIngredients: Array<AdditionalIngredients>;
  afterName: Scalars['String'];
  alternateIngredients: Array<AlternateIngredients>;
  beforeName: Scalars['String'];
  id: Scalars['ID'];
  ingredient: Ingredient;
  optional: Scalars['Boolean'];
  values?: Maybe<IngredientValues>;
};

export type RecipeMatch = {
  __typename?: 'RecipeMatch';
  matchPercent: Scalars['Float'];
  recipe: Recipe;
};

export type RecipeSuggestionsInput = {
  meal: MealType;
  recipeCount: Scalars['Int'];
};

export type RecipeTips = {
  __typename?: 'RecipeTips';
  content: Array<Scalars['String']>;
  header: Scalars['String'];
};

export type RecipeVideo = {
  __typename?: 'RecipeVideo';
  id: Scalars['ID'];
  type: VideoType;
};

export type RecipeWithServings = {
  __typename?: 'RecipeWithServings';
  recipe?: Maybe<Recipe>;
  servings: Scalars['Int'];
};

export type RecommendedRecipesCategory = {
  __typename?: 'RecommendedRecipesCategory';
  matches: Array<Maybe<RecipeMatch>>;
  title: RecommendedRecipesCategoryTitle;
};

export enum RecommendedRecipesCategoryTitle {
  Breakfast = 'BREAKFAST',
  Dinner = 'DINNER',
  Lunch = 'LUNCH',
  Snacks = 'SNACKS'
}

export type ReflectDailyRoutineCardInput = {
  id: Scalars['ID'];
  mood: DailyRoutineCardReflectionMood;
  qas: Array<DailyRoutineCardReflectionQaInput>;
};

export type ReflectDailyRoutineCardResponse = {
  __typename?: 'ReflectDailyRoutineCardResponse';
  card?: Maybe<DailyRoutineCard>;
};

export type ReplaceMealplanRecipe = {
  day: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  meal: MealType;
  recipe: Scalars['String'];
  servings: Scalars['Int'];
};

export type SearchFilterTagsInput = {
  mealplans?: InputMaybe<Scalars['Boolean']>;
};

export type SearchFilterTagsResponse = {
  __typename?: 'SearchFilterTagsResponse';
  mealplans: Array<Tag>;
};

export type Servings = {
  __typename?: 'Servings';
  /** The available serving sizes for the recipe. */
  allowed: Array<Scalars['Int']>;
  /** The default serving size for the recipe. */
  default: Scalars['Int'];
};

export type ShoppingIngredient = {
  __typename?: 'ShoppingIngredient';
  additionalIngredients: Array<AdditionalIngredients>;
  afterName: Scalars['String'];
  alternateIngredients: Array<AlternateIngredients>;
  beforeName: Scalars['String'];
  id: Scalars['ID'];
  ingredient: Ingredient;
  optional: Scalars['Boolean'];
  shoppingSection: Scalars['String'];
  values?: Maybe<IngredientValues>;
};

export type SkipDailyRoutineCardInput = {
  id: Scalars['ID'];
};

export type SkipDailyRoutineCardResponse = {
  __typename?: 'SkipDailyRoutineCardResponse';
  card?: Maybe<DailyRoutineCard>;
};

export type Stars = {
  __typename?: 'Stars';
  five?: Maybe<Scalars['Float']>;
  four?: Maybe<Scalars['Float']>;
  one?: Maybe<Scalars['Float']>;
  three?: Maybe<Scalars['Float']>;
  two?: Maybe<Scalars['Float']>;
};

export type StartDailyRoutineDayInput = {
  endTimeSeconds: Scalars['Int'];
  id: Scalars['ID'];
};

export type StartDailyRoutineDayResponse = {
  __typename?: 'StartDailyRoutineDayResponse';
  day?: Maybe<DailyRoutineDay>;
};

export type StripeCheckoutSession = {
  __typename?: 'StripeCheckoutSession';
  id: Scalars['String'];
  url: Scalars['String'];
};

export enum StripeCurrency {
  Sek = 'SEK',
  Usd = 'USD',
  UsdEs = 'USD_ES'
}

export type StripeCustomerPortalResponse = {
  __typename?: 'StripeCustomerPortalResponse';
  url?: Maybe<Scalars['String']>;
};

export type StripeProviderData = {
  __typename?: 'StripeProviderData';
  clientSecret?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type StripeSubscriptionInput = {
  currency: StripeCurrency;
  paymentMethodId: Scalars['ID'];
  plan: StripeSubscriptionPlan;
  trialPeriodDays?: InputMaybe<Scalars['Int']>;
};

export enum StripeSubscriptionPlan {
  Monthly = 'MONTHLY',
  Yearly = 'YEARLY'
}

export type SuggestRecipesQueryInput = {
  count?: InputMaybe<Scalars['Int']>;
  partialQuery: Scalars['String'];
};

export type SuggestRecipesQueryResponse = {
  __typename?: 'SuggestRecipesQueryResponse';
  suggestions?: Maybe<Array<Scalars['String']>>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type TestKitchen = {
  __typename?: 'TestKitchen';
  isTested: Scalars['Boolean'];
};

export type Titles = {
  __typename?: 'Titles';
  admin: Scalars['String'];
  plural: Scalars['String'];
  shoppingList: Scalars['String'];
  singular: Scalars['String'];
};

export enum UnitSystem {
  Imperial = 'IMPERIAL',
  Metric = 'METRIC'
}

export type UpdateMealplanDayServings = {
  day: Scalars['String'];
  id: Scalars['ID'];
  servings: Scalars['Int'];
};

export type UpdateMealplanRecipeServings = {
  day: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  meal: MealType;
  recipe: Scalars['String'];
  servings: Scalars['Int'];
};

export type UpdateMealplanServings = {
  id: Scalars['ID'];
  servings: Scalars['Int'];
};

export type UpdateStripePaymentMethodInput = {
  paymentMethodId: Scalars['String'];
};

export type UpdateStripePaymentMethodResponse = {
  __typename?: 'UpdateStripePaymentMethodResponse';
  paymentMethodId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  avoidedFoods?: InputMaybe<Array<FoodType>>;
  birthYear?: InputMaybe<Scalars['Int']>;
  carbTolerance?: InputMaybe<Ranking>;
  cookingSkill?: InputMaybe<Ranking>;
  cookingTimeExtent?: InputMaybe<Ranking>;
  dailyMealsCount?: InputMaybe<Scalars['Int']>;
  desiredCuisines?: InputMaybe<Array<Cuisine>>;
  desiredDishes?: InputMaybe<Array<Dish>>;
  diet?: InputMaybe<Diet>;
  dietChallenge?: InputMaybe<DietChallenge>;
  dietEffectiveness?: InputMaybe<Ranking>;
  firstName?: InputMaybe<Scalars['String']>;
  foodBudget?: InputMaybe<Ranking>;
  gender?: InputMaybe<Gender>;
  healthConditions?: InputMaybe<Array<HealthCondition>>;
  heightCm?: InputMaybe<Scalars['Float']>;
  language?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  measurementSystem?: InputMaybe<MeasurementSystem>;
  physicalActivity?: InputMaybe<Ranking>;
  proteinTolerance?: InputMaybe<Ranking>;
  taxResidence?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avoidedFoods?: Maybe<Array<FoodType>>;
  birthYear?: Maybe<Scalars['Int']>;
  carbTolerance?: Maybe<Ranking>;
  cookingSkill?: Maybe<Ranking>;
  cookingTimeExtent?: Maybe<Ranking>;
  /** @deprecated Use taxResidence instead */
  country?: Maybe<Scalars['String']>;
  dailyMealsCount?: Maybe<Scalars['Int']>;
  desiredCuisines?: Maybe<Array<Cuisine>>;
  desiredDishes?: Maybe<Array<Dish>>;
  diet?: Maybe<Diet>;
  dietChallenge?: Maybe<DietChallenge>;
  /** @deprecated No longer relevant. */
  dietEffectiveness?: Maybe<Ranking>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  foodBudget?: Maybe<Ranking>;
  gender?: Maybe<Gender>;
  healthConditions?: Maybe<Array<HealthCondition>>;
  heightCm?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  measurementSystem?: Maybe<MeasurementSystem>;
  physicalActivity?: Maybe<Ranking>;
  proteinTolerance?: Maybe<Ranking>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxResidence?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  userName: Scalars['String'];
};

export type UserInput = {
  communicationPrefs: CommunicationPrefsInput;
  country?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  taxResidence?: InputMaybe<Scalars['String']>;
};

export type VerifyDdProMemberJoinUrlInput = {
  signedURL: Scalars['String'];
};

export type VerifyDdProMemberJoinUrlResponse = {
  __typename?: 'VerifyDDProMemberJoinURLResponse';
  valid: Scalars['Boolean'];
};

export enum VideoType {
  Vimeo = 'VIMEO',
  Youtube = 'YOUTUBE'
}

export enum WeightLossGoal {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  None = 'NONE'
}

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String'];
};

export type NutritionFragmentFragment = { __typename?: 'Nutrition', values: { __typename?: 'NutritionValues', carbs: number, fat: number, protein: number, fiber?: number | null, calories: number }, percentages: { __typename?: 'NutritionPercentages', carbs: number, fat: number, protein: number } };

export type BaseRecipeFragment = { __typename?: 'Recipe', id: string, isMembersOnly?: boolean | null, title: string, description: string, rating: number, modifiedAt: any, slug: string, nutrition: { __typename?: 'Nutrition', values: { __typename?: 'NutritionValues', carbs: number, fat: number, protein: number, fiber?: number | null, calories: number }, percentages: { __typename?: 'NutritionPercentages', carbs: number, fat: number, protein: number } }, time: { __typename?: 'CookTime', preparation: number, cook: number }, difficulty: { __typename?: 'RatingValuePair', rating: string, value: number }, images: { __typename?: 'ImagesSet', hz: string, vt: string, brightness: Brightness }, tags: Array<{ __typename?: 'Tag', id: string, type: string, title: string }>, servings: { __typename?: 'Servings', default: number, allowed: Array<number> }, strictness: { __typename?: 'RatingValuePair', rating: string, value: number }, instructionSections: Array<{ __typename?: 'InstructionSection', title: string, steps: Array<string>, header: { __typename?: 'HeaderFooter', text: string }, footer: { __typename?: 'HeaderFooter', text: string } }>, tips: Array<{ __typename?: 'RecipeTips', header: string, content: Array<string> }>, videos?: Array<{ __typename?: 'RecipeVideo', id: string, type: VideoType } | null> | null };

export type GetRecipesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  tagFilters?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  premiumOnly?: InputMaybe<Scalars['Boolean']>;
  includePremiumPreview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetRecipesQuery = { __typename?: 'Query', listRecipes: { __typename?: 'ListRecipesResponse', totalSize: number, nextPage?: number | null, recipes: Array<{ __typename?: 'Recipe', id: string, isMembersOnly?: boolean | null, title: string, description: string, rating: number, modifiedAt: any, slug: string, nutrition: { __typename?: 'Nutrition', values: { __typename?: 'NutritionValues', carbs: number, fat: number, protein: number, fiber?: number | null, calories: number }, percentages: { __typename?: 'NutritionPercentages', carbs: number, fat: number, protein: number } }, time: { __typename?: 'CookTime', preparation: number, cook: number }, difficulty: { __typename?: 'RatingValuePair', rating: string, value: number }, images: { __typename?: 'ImagesSet', hz: string, vt: string, brightness: Brightness }, tags: Array<{ __typename?: 'Tag', id: string, type: string, title: string }>, servings: { __typename?: 'Servings', default: number, allowed: Array<number> }, strictness: { __typename?: 'RatingValuePair', rating: string, value: number }, instructionSections: Array<{ __typename?: 'InstructionSection', title: string, steps: Array<string>, header: { __typename?: 'HeaderFooter', text: string }, footer: { __typename?: 'HeaderFooter', text: string } }>, tips: Array<{ __typename?: 'RecipeTips', header: string, content: Array<string> }>, videos?: Array<{ __typename?: 'RecipeVideo', id: string, type: VideoType } | null> | null } | null> } };

export const NutritionFragmentFragmentDoc = gql`
    fragment NutritionFragment on Nutrition {
  values {
    carbs
    fat
    protein
    fiber
    calories
  }
  percentages {
    carbs
    fat
    protein
  }
}
    `;
export const BaseRecipeFragmentDoc = gql`
    fragment BaseRecipe on Recipe {
  id
  isMembersOnly
  title
  description
  rating
  modifiedAt
  slug
  nutrition {
    ...NutritionFragment
  }
  time {
    preparation
    cook
  }
  difficulty {
    rating
    value
  }
  images {
    hz
    vt
    brightness
  }
  tags {
    id
    type
    title
  }
  servings {
    default
    allowed
  }
  strictness {
    rating
    value
  }
  instructionSections {
    title
    header {
      text
    }
    footer {
      text
    }
    steps
  }
  tips {
    header
    content
  }
  videos {
    id
    type
  }
}
    ${NutritionFragmentFragmentDoc}`;
export const GetRecipesDocument = gql`
    query GetRecipes($page: Int, $pageSize: Int, $tagFilters: [String], $premiumOnly: Boolean, $includePremiumPreview: Boolean) {
  listRecipes(
    input: {page: $page, pageSize: $pageSize, tagFilters: $tagFilters, premiumOnly: $premiumOnly, includePremiumPreview: $includePremiumPreview}
  ) {
    recipes {
      ...BaseRecipe
    }
    totalSize
    nextPage
  }
}
    ${BaseRecipeFragmentDoc}`;

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      tagFilters: // value for 'tagFilters'
 *      premiumOnly: // value for 'premiumOnly'
 *      includePremiumPreview: // value for 'includePremiumPreview'
 *   },
 * });
 */
export function useGetRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
      }
export function useGetRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
        }
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<typeof useGetRecipesLazyQuery>;
export type GetRecipesQueryResult = Apollo.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;