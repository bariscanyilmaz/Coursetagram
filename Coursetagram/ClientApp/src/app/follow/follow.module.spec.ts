import { FollowModule } from './follow.module';

describe('FollowModule', () => {
  let followModule: FollowModule;

  beforeEach(() => {
    followModule = new FollowModule();
  });

  it('should create an instance', () => {
    expect(followModule).toBeTruthy();
  });
});
