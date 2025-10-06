type GlobalThis = typeof globalThis;

interface ExtendedGlobal extends GlobalThis {
  ___loader: { enqueue: jest.Mock };
}

(global as ExtendedGlobal).___loader = {
  enqueue: jest.fn(),
};
