import { ICheckbox } from '../interfaces/ICheckbox';
import { MetamaskElement } from '../utils/Selectors';

export class Checkbox implements ICheckbox {
  e: MetamaskElement;

  constructor(selector: string) {
    const platform = driver.isAndroid ? 'android' : 'ios';
    if (platform === 'android') {
      this.e = $(`~${selector}`);
    } else {
      this.e = $(`-ios class chain:${selector}`);
    }
  }

  async tap(): Promise<void> {
    await this.e.click();
  }
}
