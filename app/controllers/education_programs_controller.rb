class EducationProgramsController < ApplicationController

  def index
    @education_programs = EducationProgram.all
  end

  def show
    @education_program = EducationProgram.find(params[:id])
  end

end
