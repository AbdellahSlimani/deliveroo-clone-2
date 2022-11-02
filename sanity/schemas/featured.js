export default {
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Categroy name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurant',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: "reference", to: [{type: "restaurant"}]}]
    },
  ]
}
