import { LeadsService } from './leads.service';

describe('LeadsService', () => {
  it('persists a public lead with optional product and created timestamp', async () => {
    const saved: unknown[] = [];
    const repository = {
      create: jest.fn((payload) => ({ id: 'lead-1', ...payload })),
      save: jest.fn(async (entity) => {
        saved.push(entity);
        return { ...entity, createdAt: new Date('2026-07-01T12:00:00.000Z') };
      }),
    };

    const service = new LeadsService(repository as never);
    const result = await service.create({
      name: 'Giancarlo',
      email: 'giancarlo@example.com',
      phone: '+55 11 99999-9999',
      message: 'Quero um site institucional.',
      product: 'Sites Institucionais',
    });

    expect(repository.create).toHaveBeenCalledWith({
      name: 'Giancarlo',
      email: 'giancarlo@example.com',
      phone: '+55 11 99999-9999',
      message: 'Quero um site institucional.',
      product: 'Sites Institucionais',
    });
    expect(saved).toHaveLength(1);
    expect(result).toMatchObject({
      id: 'lead-1',
      email: 'giancarlo@example.com',
      product: 'Sites Institucionais',
    });
  });
});
