// tslint:disable-next-line:no-implicit-dependencies no-submodule-imports
import Artist from '@/components/Artist'
import assert from 'power-assert'
import sinon from 'sinon'

it('calculates random value from min to max', () => {
  sinon.stub(Math, 'random').returns(0.5)
  const number = Artist.Math.rand(5, 10)
  assert(number === 7)
})
