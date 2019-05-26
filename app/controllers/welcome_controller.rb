class WelcomeController < ApplicationController

  def home
    @specializations = Specialty.all

    @educ_prog = EducationProgram.all


  end

end
