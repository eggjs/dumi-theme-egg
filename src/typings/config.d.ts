export default interface IThemeEggConfig {
  links: Array<{
    title: string;
    list: Array<{
      name: string;
      url: string;
    }>;
  }>;
}
