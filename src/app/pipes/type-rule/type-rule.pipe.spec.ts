import { TypeRulePipe } from './type-rule.pipe';

describe('TypeRulePipe', () => {
  let pipe;
  it('create an instance', () => {
    pipe = new TypeRulePipe();
    expect(pipe).toBeTruthy();
  });

  describe('test transform', () => {
    it('should be transform to Comunity', () => {
      expect(pipe.transform('C')).toBe('Comunidad');
    });
    it('should be transform to Propietario', () => {
      expect(pipe.transform('P')).toBe('Propietario');
    });
  });
});
