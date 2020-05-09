import getLevel from '../get-level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getLevel', () => {  

  test('get level 1', () => {

    fetchData.mockReturnValue({status: 'ok', level: '1'});

    const result = getLevel(1);

    expect(result).toBe(`Ваш текущий уровень: 1`);

  });

  test('get level - error', () => {

    fetchData.mockReturnValue({status: 'error'});

    const result = getLevel();

    expect(result).toBe(`Информация об уровне временно недоступна`);

  });

});