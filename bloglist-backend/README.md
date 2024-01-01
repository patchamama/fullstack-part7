# fullstackopen-part4-bloglist [_Testing Express servers, user administration_](https://fullstackopen.com/en/part4)

Answers to [openfullstack.com](https://fullstackopen.com) course exercises from the University of Helsinki

# Exercises

## a. Structure of backend application, introduction to testing

- [Exercises 4.1.-4.2.](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-1-4-2)
  _Solution details: [4.1](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/01104c7798ad53f35ee73994826f5cc3602b9b3e) | [4.2](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/7c913309759236084783f4bdfdec443c5b9e19d5)_

- [Exercises 4.3.-4.7.](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-3-4-7)
  _Solution details: [4.3](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/0f1a759e78310de711531ed481917496e2f50ec8) | [4.4](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/2585dc72841e8382123fa481aa149d19dd611482) | [4.5](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/4fd94b8779e33ea32b3703a6e6a823291d247e0c) | [4.6](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/c9d554cf41d5cbe5992fd2e2005564fab816d8ad) | [4.7](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/27b41a689bf77cb20a9853fb4f7eaaa998262022)_

_The exercise 4.7 was done with [lodash library](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/27b41a689bf77cb20a9853fb4f7eaaa998262022) and [without additonal libraries](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/e402cbc35bd3566eb016a75641c9401e53eb5a37)_

### Tests can be execute as follow:

```
npm test
```

## b. Testing the backend

- [Exercises 4.8.-4.12.](https://fullstackopen.com/es/part4/probando_el_backend#ejercicios-4-8-4-12)
  _Solution details: [4.8](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/f4361d4a4973e98d2368596056f9257e1487565d) | [4.9](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/6b9903229f75ed7def60d4f81a386e61997a9341) | [4.10](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/d9fe5ba9dffc9e2d5c1b74bb88028436dd4629eb) | [4.11](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/379490b06d3469078cc9d2463910ae6b6f2270a3) | [4.12](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/fb256915edabc1d1778726332efcc53862f623c5)_

- [Exercises 4.13.-4.14.](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-13-4-14)
  _Solution details: [4.13](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/d6c0565bda0952cc402847b5522c446613d7ced5) | [4.14](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/6ac521f7c5fc7d527a5e45baf7db3247cd277aaf)_

## c. User administration

## d. Token authentication

- [Exercises 4.15.-4.23.](https://fullstackopen.com/en/part4/token_authentication#exercises-4-15-4-23)
  _Solution details: [4.15](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/5ec001cec3b44f41a111681af2ae785289d76b6d) | [4.16](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/7839750f9aa7d52deaa62b6d8a8eafa46dd98ca1) | [4.17](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/fd871d2de79352ff62c26c6aeec438fe43f7167a) | [4.18](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/530d7c2eab9c8ce3bbfd2220e904290e28f9b262) | [4.19](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/41f1994a2a145dc97b01e4477efb8b689d626c47) | [4.20](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/b2327ebc80681aa98b7e7c0826345872a6fdb647) | [4.21](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/e3a78c91dcde8dc6c82df469c1f0e83494a81c4c) | [4.22](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/fdcd8fa415546323d10ab76394ded1bdc6bcdd4f) | [4.23](https://github.com/patchamama/fullstackopen-part4-bloglist/commit/36c6062f89bc86a7725eb8fc9233b8b7177396b1)_

## Pending

Does not appear in any exercise:

- It is only possible for authenticated users to update entries such as likes, url (existing) or title. (controllers/blogs.js > .put() action)
- Optionally save creation and update date of blog entries
- Return API queries such as the blog posts of a certain user, or the blog posts with the most likes.
