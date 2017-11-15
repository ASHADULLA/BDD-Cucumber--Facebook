Feature: Facebook Testing

  Scenario Outline: Login checking
    Given open facebook site
    When enter userid as "<x>" and password as "<y>"
    Then click login button
    And validate userid with criteria "<r>"
    And validate password with criteria "<r>"

    Examples: 
      | x          | y            | r       |
      | 9949457356 | Ashu,128793# | valid   |
      | 996hkk6866 | Ashu,128793# | invalid   |
      | 9949457356 | Ash6khk,6656 | invalid   |
      
