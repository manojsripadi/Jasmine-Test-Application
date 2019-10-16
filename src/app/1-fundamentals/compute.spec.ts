import {compute, greet} from './compute';

describe('compute',() => {
    it('should be equal to 0 when input is negative', ()=>{
    const result = compute(-1);
    expect(result).toBe(0);
    }),
    it('should be equal to 1 when input is positive', ()=>{
        const result = compute(0);
        expect(result).toBe(1);
        })
});

describe('greet',()=>{
    it('should wish the name which is passed to greet',()=>{
        expect(greet('manoj')).toContain('manoj');
    })
})