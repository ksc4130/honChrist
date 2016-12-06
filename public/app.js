(function () {
  'use script';

  var app = angular.module('app', []);

  app.component('birds', {
    templateUrl: 'birds.component.html',
    controller: function ($timeout, $interval) {
      var self = this,
        words = [
          'one',
          'two',
          'three',
          'four',
          
          'On the',
          'fourth',
          'day of',
          'Christmas',

          'The dev',
          'team',
          'gave to',
          'Hondros',

          'three',
          'features',
          'and a',
          'bug fix'
        ];

      self.birds = [
        {
          singing: false,
          eye: false,
          words: '',
          left: '200px'
        },
        {
          singing: false,
          eye: false,
          words: '',
          left: '500px'
        },
        {
          singing: false,
          eye: false,
          words: '',
          left: '800px'
        },
        {
          singing: false,
          eye: false,
          words: '',
          left: '1100px'
        }
      ];

      //make birdys blink
      self.birds.forEach(function (bird) {
        bird.eye = true;
        var rnd = Math.floor(Math.random() * (500 - 100)) + 100;
        $timeout(function () {
          $interval(function () {
            bird.eye = false;
            $timeout(function () {
              bird.eye = true;
            },100);
          }, 1700);
        }, rnd);
      });

      //magic
      function next(cnt) {
        var word = words[cnt];
        var who = cnt % 4;
        if(who === 0) {
          self.birds.forEach(function (bird) {
            bird.words = '';
          });
        }

      self.birds[who].singing = false;
        $timeout(function () {
          self.birds[who].singing = false;
        },400);
        $timeout(function () {
          self.birds[who].words = word;
          self.birds[who].singing = true;

          cnt += 1;
          if(cnt <= words.length - 1) {
            $timeout(next.bind(null, cnt), 500);
          }
        }, 30);
      }

      $timeout(function () {
        next(0);
      }, 1500);
    }
  });

}());
