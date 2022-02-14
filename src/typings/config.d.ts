export default interface IThemeMobileConfig {
  links: Array<{
    title: string;
    list: Array<{
      name: string;
      url: string;
    }>;
  }>;
}
