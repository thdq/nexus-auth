import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.createdAt()
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({
      pagination: { first: true },
    })
  },
})
