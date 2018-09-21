import getBexPrice from '../src/index'

test('Test USD', async (done) => {
  getBexPrice('USD').then((r) => {
    expect(r.price_currency).toEqual('USD');
  }).catch(function(error) {
    console.error(error);
  });
}, 10000);

test('Test Default (BTS)', async (done) => {
  getBexPrice().then((r) => {
    expect(r.price_currency).toEqual('BTS');
  }).catch(function(error) {
    console.error(error);
  });
}, 10000);
