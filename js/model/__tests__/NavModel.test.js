var navModel = require('../NavModel'),
    _ = require('underscore')
    navModelMocks = require('../__mocks__/NavModel');

test('function returns alphabetically sorted array of items', function () {
    var expectedOrder = [
        '*a', '+a', '-a', '0a', '1a', '2a', 'AA', 'Aa', 'a', 'a1', 'a2', 'aA', 'aa', 'ab', 'ac', 'bb'
    ];
    
    expect(
        navModel.getNavBarItems(navModelMocks.navBarMockJSON).map(function (el) {
            return el.title
        })
    ).toStrictEqual(expectedOrder);
});

test('each element in result has ID field', function () {
    expect(navModel.getNavBarItems(navModelMocks.navBarMockJSON)).toEqual(
        expect.arrayContaining([
            expect.objectContaining({'id': expect.any(String)})
        ])
    )
});

test('each ID in result is unique', function () {
    var uniqueIDs = _.uniq(
        navModel.getNavBarItems(navModelMocks.navBarMockJSON).map(function (el) {
            return el.id
        })
    );
    
    expect(uniqueIDs.length === navModelMocks.navBarMockJSON.length).toBeTruthy();
});
