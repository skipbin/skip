import { defineType, defineField, defineArrayMember } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const postType = defineType({
  name: 'post',
  title: 'post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Title field with required validation
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      validation: (Rule) => Rule.required(),
    }),
    // Heading fields (heading1 to heading4) with required validation
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading 1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Heading 2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading3',
      type: 'string',
      title: 'Heading 3',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading4',
      type: 'string',
      title: 'Heading 4',
      validation: (Rule) => Rule.required(),
    }),
    // Slug field generated from title with max length and required validation
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Image field with hotspot and required alt text
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().warning('An image is a must for this post!'),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required().warning('Alt text helps with accessibility.'),
        }),
      ],
    }),
    // Description field as text with max length and required validation
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    // Main content field as an array with blocks, images, and custom embeds
    defineField({
      title: 'Main Content',
      name: 'content',
      type: 'array',
      description: 'Add the main content of the post here—paragraphs, headings, images, whatever works!',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  { title: 'URL', name: 'href', type: 'url' },
                  { title: 'Open in New Tab', name: 'blank', type: 'boolean' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { title: 'Caption', name: 'caption', type: 'string', options: { isHighlighted: true } },
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Alt text is key for accessibility.'),
            },
            { title: 'Image Width', name: 'width', type: 'number' },
            { title: 'Image Height', name: 'height', type: 'number' },
            { title: 'Lazy Load', name: 'lazyLoad', type: 'boolean', initialValue: true },
          ],
        },
        {
          type: 'object',
          name: 'customEmbed',
          title: 'Custom Embed',
          fields: [{ title: 'Embed URL', name: 'embedUrl', type: 'url' }],
          preview: {
            select: { title: 'embedUrl' },
            prepare(selection) {
              const { title } = selection;
              return { title: title ? `Embed: ${title}` : 'Embed: No URL Set' };
            },
          },
        },
      ],
    }),
    // FAQ field as an array of objects with questions and answers
    defineField({
      name: 'faq',
      title: 'FAQs',
      type: 'array',
      description: 'Add frequently asked questions and answers about skip bins or waste management here!',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().min(5).warning('Keep questions short and clear!'),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule) => Rule.required().warning('Every question needs an answer!'),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title || 'Unnamed FAQ',
              };
            },
          },
        },
      ],
    }),
    // Tags field as an array of strings with max limit and uniqueness validation
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      validation: (Rule) => Rule.max(10).warning('Keep it to 10 tags or fewer!').unique(),
    }),
    // Link field as a URL with scheme validation
    defineField({
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    // PublishedAt field as datetime with initial value set to now
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  // Preview configuration for Sanity studio
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});