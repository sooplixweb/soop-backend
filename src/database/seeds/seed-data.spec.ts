import { caseStudiesSeed, productsSeed, servicesSeed } from './seed-data';

describe('seed data', () => {
  it('includes the highlighted delivery product and Mais Burguer case', () => {
    expect(productsSeed).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: 'gestao-delivery-hamburguerias',
          highlight: true,
          name: 'Gestão de Delivery para Hamburguerias',
        }),
      ]),
    );

    expect(caseStudiesSeed).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Mais Burguer',
          segment: 'Delivery / Hamburgueria',
          imageUrl: '/assets/mais-burguer.png',
        }),
      ]),
    );
  });

  it('covers the six agency service pillars from the brief', () => {
    expect(servicesSeed.map((service) => service.slug)).toEqual([
      'branding-identidade-visual',
      'web-design-ui',
      'landing-pages-conversao',
      'sites-institucionais',
      'posicionamento-marca',
      'gestao-delivery',
    ]);
  });
});
